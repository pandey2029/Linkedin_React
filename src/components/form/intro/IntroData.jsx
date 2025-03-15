import { useEffect, useState } from "react";
import Form from "../../formBuilder/Form";
import modalEvent from "../../../utils/Event";

export default function IntroData(){
    const fields=[
        {type:"input",label:"First Name",id:"firstName",placeholder:"",rowOrder:1,columnOrder:0},
        {type:"input",label:"Last Name",id:"lastName",placeholder:"",rowOrder:2,columnOrder:0},
        {type:"textarea",label:"Headline",id:"headline",placeholder:"",rowOrder:3,columnOrder:0},
        {type:"select",label:"Current Position",id:"currentPosition",placeholder:"",rowOrder:4,columnOrder:0,options:[]},
        {type:"select",label:"School",id:"school",placeholder:"",rowOrder:5,columnOrder:0,options:[]},
        {type:"input",label:"Country/Region",id:"country",placeholder:"",rowOrder:6,columnOrder:0},
        {type:"input",label:"City",id:"city",placeholder:"",rowOrder:7,columnOrder:0},
    ]
    
    const groupField=[[{type:"input",label:"First Name",id:"firstName",placeholder:"",rowOrder:1,columnOrder:0}],
                [ {type:"input",label:"Last Name",id:"lastName",placeholder:"",rowOrder:2,columnOrder:0}],
                [{type:"textarea",label:"Headline",id:"headline",placeholder:"",rowOrder:3,columnOrder:0}],
                [{type:"select",label:"Current Position",id:"currentPosition",placeholder:"",rowOrder:4,columnOrder:0,options:[]}],
                [{type:"select",label:"School",id:"school",placeholder:"",rowOrder:5,columnOrder:0,options:[]}],
                [{type:"input",label:"Country/Region",id:"country",placeholder:"",rowOrder:6,columnOrder:0}],
                [{type:"input",label:"City",id:"city",placeholder:"",rowOrder:7,columnOrder:0}]
               ]

    const introData=JSON.parse(localStorage.getItem("introData")) || {}
    const [formData,setFormData]=useState(introData ? introData :{
            firstName:"",
            lastName:"",
            headline:"",
            currentPosition:"",
            school:"",
            country:"",
            city:"",
            
          })



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    function submitIntro(e) {
        e.preventDefault()
        modalEvent.emit("addIntro", formData);
       
        localStorage.setItem("introData", JSON.stringify(formData));
        setFormData(prev => {
            const resetData = Object.keys(prev).reduce((acc, key) => {
                acc[key] = "";
                return acc;
            }, {});
            return resetData;
        });
    
        console.log(formData);
        modalEvent.emit("activeModal", "");
    }

    return(
        <>
        
        <Form storageName="introData" eventName="addIntro" fields={groupField}  formData={formData}  handleChange={handleChange} handleSubmit={submitIntro} setFormData={setFormData} heading="Add Intro"/>
        </>
    )
}