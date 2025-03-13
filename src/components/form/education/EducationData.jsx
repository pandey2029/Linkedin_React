import Form from "../../formBuilder/Form";
import { YEAR } from "../../../utils/Constants";
import { MONTHS } from "../../../utils/Constants";
import { useState } from "react";
export default function EducationData(){
    const fields=[{type:"input",label:"School",id:"school",placeholder:"Ex:Boston University",rowOrder:1,columnOrder:0},
        {type:"input",label:"Degree",id:"degree",placeholder:"Ex:Bachelor's",rowOrder:2,columnOrder:0},
        {type:"input",label:"Field",id:"field",placeholder:"Ex:Business",rowOrder:3,columnOrder:0},
        {type:"select",label:"Start date",id:"startMonth",placeholder:"",rowOrder:4,columnOrder:0,options:MONTHS},
        {type:"select",label:"End date",id:"endMonth",placeholder:"",rowOrder:5,columnOrder:0,options:MONTHS},
        {type:"select",label:"",id:"startYear",placeholder:"",rowOrder:4,columnOrder:1,options:YEAR},
        {type:"select",label:"",id:"endYear",placeholder:"",rowOrder:5,columnOrder:1,options:YEAR},
        {type:"input",label:"Grade",id:"grade",placeholder:"",rowOrder:6,columnOrder:0},
        {type:"textarea",label:"Activities and societies",id:"activitySociety",placeholder:"Ex:Alpha Phi Omega,Volleyball",rowOrder:7,columnOrder:0},
        {type:"textarea",label:"Description",id:"description",placeholder:"",rowOrder:8,columnOrder:0},
    ]   
    const groupField=fields.reduce((acc,field)=>{
        const row=field.rowOrder;
        if(!acc[row]){acc[row]=[];}
        acc[row].push(field);
        return acc;
    },[])

    // const [education, setEducation] = useState(() => {
    //     const data = localStorage.getItem("educationData");
    //     return data ? JSON.parse(data) : [];
    //   });
      // const addEducationData = (edu) => {
      //   setEducation([...education, edu]);
      // };

      const [formData,setFormData]=useState({
        school:"",
        degree:"",
        field:"",
        startMonth:"",
        endMonth:"",
        startYear:"",
        endYear:"",
        grade:"",
        activitySociety:"",
        description:""
      })
      
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


    return(
        <>
            <Form storageName="educationData" eventName="addEducation" fields={groupField}  formData={formData}  handleChange={handleChange} setFormData={setFormData} heading="Add Education"/>
            {/* <Form fields={groupField} handleSubmit={addEducationData} data={education} formData={formData}  handleChange={handleChange} setFormData={setFormData} heading="Add Education"/> */}
        </>
        
    )
}