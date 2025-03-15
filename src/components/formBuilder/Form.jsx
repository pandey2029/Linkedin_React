/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TextArea from "../inputComponents/TextArea";
import TextBox from "../inputComponents/TextBox";
import SelectBox from "../inputComponents/SelectBox";
import CheckBox from "../inputComponents/CheckBox";
import "./Form.css"
import Header from "./Header";
import Footer from "./Footer";
import modalEvent from "../../utils/Event";
export default function Form(props){
    const functionMapper=new Map();
    functionMapper.set("input",TextBox);
    functionMapper.set("select",SelectBox);
    functionMapper.set("textarea",TextArea);
    functionMapper.set("checkbox",CheckBox);

    function handleSubmit(e){
        e.preventDefault();
        console.log(props.formData);
        // props.handleSubmit(props.formData);
        
        modalEvent.emit(props.eventName,props.formData);
        // localStorage.setItem("educationData", JSON.stringify([...props.data, props.formData]));
        const existingData = JSON.parse(localStorage.getItem(props.storageName)) || [];
        existingData.push(props.formData);
        localStorage.setItem(props.storageName, JSON.stringify(existingData));


        props.setFormData({
            school: "",
            degree: "",
            field: "",
            startMonth: "",
            grade:"",
            endMonth: "",
            startYear: "",
            endYear: "",
            activitySociety: "",
            description: "",
          });
        //   const resetData = Object.keys(props.formData).reduce((acc, key) => {
        //     acc[key] = "";
        //     return acc;
        //     }, {});

          console.log(props.formData);
    }
    
    return(
        <>
        <div id="modal">
            <div id="tab">
        <Header heading={props.heading}/>
        <form onSubmit={handleSubmit}>
            {props.fields.map((groupField)=>(
                
                <div id={`row${groupField[0].rowOrder}`}  className={groupField.length>1 ? "modalSelect":""}>
                
                {groupField.map((field)=>{
                    const Component=functionMapper.get(field.type);
                    return Component ? <Component field={field} handleChange={props.handleChange} data={props.formData}/> : null
            })}
                </div>
                
                
            ))}
        <Footer/>
        </form>
        
        </div>
        </div>

        </>
    )
}