import { useState } from "react";
import Form from "../../formBuilder/Form";
import { MONTHS, YEAR } from "../../../utils/Constants";

export default function ExperienceData(){
    const fields=[{type:"input",label:"Title",id:"title",placeholder:"Ex:Sales Manager",rowOrder:1,columnOrder:0},
        {type:"input",label:"Location",id:"location",placeholder:"Ex:London, UK",rowOrder:6,columnOrder:0},
        {type:"input",label:"Profile Headline",id:"headline",placeholder:"Headline",rowOrder:9,columnOrder:0},
        {type:"select",label:"Start date",id:"startMonth",placeholder:"",rowOrder:4,columnOrder:0,options:MONTHS},
        {type:"select",label:"End date",id:"endMonth",placeholder:"",rowOrder:5,columnOrder:0,options:MONTHS},
        {type:"select",label:"",id:"startYear",placeholder:"",rowOrder:4,columnOrder:1,options:YEAR},
        {type:"select",label:"",id:"endYear",placeholder:"",rowOrder:5,columnOrder:1,options:YEAR},
        {type:"select",label:"Location type",id:"locationType",placeholder:"",rowOrder:7,columnOrder:0,options:["Please select","On-site","Hybrid","Remote"]},
        {type:"select",label:"Employment type",id:"empType",placeholder:"",rowOrder:2,columnOrder:0,options:["Please select","Full-time","Part-time","Internship"]},
        {type:"input",label:"Company or Organization",id:"company",placeholder:"Ex:Tekion",rowOrder:3,columnOrder:0},
        {type:"textarea",label:"Description",id:"description",placeholder:"List major duties and success, highlighting specific projects",rowOrder:8,columnOrder:0},
    ]  
    const groupField=fields.reduce((acc,field)=>{
        const row=field.rowOrder;
        if(!acc[row]){acc[row]=[];}
        acc[row].push(field);
        return acc;
    },[])
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        empType: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        location: "",
        locationType: "",
        description: "",
        headline: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Form storageName="experienceData" eventName="addExperience" fields={groupField} formData={formData} handleChange={handleChange} setFormData={setFormData} heading="Add Experience" />
        </>
    );
}
