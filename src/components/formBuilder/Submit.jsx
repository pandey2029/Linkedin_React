import modalEvent from "../../utils/event";

export default function Submit(type, formData,e) {
    switch (type) {
        case "introData":
            return submitIntro(formData,e);
        case "educationData":
            return submitEducation(formData,e);
        case "experienceData":
            return submitExperience(formData,e);
        default:
            return ()=>console.log("Invalid type");
    }
}

function submitIntro(props,e) {
    e.preventDefault()
    modalEvent.emit(props.eventName, props.formData);
   
    localStorage.setItem(props.storageName, JSON.stringify(props.formData));
    props.setFormData(prev => {
        const resetData = Object.keys(prev).reduce((acc, key) => {
            acc[key] = "";
            return acc;
        }, {});
        return resetData;
    });

    console.log(props.formData);
    modalEvent.emit("activeModal", "");
}

function submitEducation(props,e) {
    e.preventDefault()
    const { school, startYear, endYear } = props.formData;

    if (!school.trim() || !startYear || !endYear) {
        alert("School name, Start Year, and End Year cannot be empty.");
        return;
    }
    console.log(props.formData);
   

    modalEvent.emit(props.eventName, props.formData);
    const existingData = JSON.parse(localStorage.getItem(props.storageName)) || [];
    existingData.push(props.formData);
    localStorage.setItem(props.storageName, JSON.stringify(existingData));
    props.setFormData(prev => {
        const resetData = Object.keys(prev).reduce((acc, key) => {
            acc[key] = "";
            return acc;
        }, {});
        return resetData;
    });

    console.log(props.formData);
    modalEvent.emit("activeModal", "");
}

function submitExperience(props, e) {
    e.preventDefault()
    modalEvent.emit(props.eventName, props.formData);
    const existingData=JSON.parse(localStorage.getItem(props.storageName)) || [];
    const {company,...detail}=props.formData;
    
    const existingIndex = existingData.findIndex(item => item.company === company);

    if (existingIndex !== -1) {
       
        existingData[existingIndex] = {
            ...existingData[existingIndex],
            details: [...existingData[existingIndex].details, detail] 
        };
    } else {
        
        existingData.push({ company, details: [detail] });
    }
    localStorage.setItem(props.storageName,JSON.stringify(existingData));
    props.setFormData(prev => {
        const resetData = Object.keys(prev).reduce((acc, key) => {
            acc[key] = "";
            return acc;
        }, {});
        return resetData;
    });

    console.log(props.formData);
    modalEvent.emit("activeModal", "");
}
