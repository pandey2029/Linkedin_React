/* eslint-disable react/prop-types */
// export default function TextBox({field,handleChange,data}){
//     return(
//         <>
//           <label id={field.id} style={{order:field.columnOrder}}>
//              {field.label}
//              <input type="text" placeholder={field.placeholder} name={field.id} onChange={handleChange} value={data[field.id]}/>
//           </label>
//         </>
//     )

import InputLabel from "../elements/inputWithLabel/InputLabel";



// }
export default function TextBox({field,handleChange,data}){
  return(
      <InputLabel field={field} eventHandler={{onChange:handleChange}} data={data} style={{order:field.columnOrder}} attributes={{type:field.type,placeholder:field.placeholder,name:field.id}}/>
  )
}