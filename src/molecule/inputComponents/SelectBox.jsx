import SelectLabel from "../selectWithLabel/SelectLabel"

/* eslint-disable react/prop-types */
export default function SelectBox({field,handleChange,data}){
    return(
        // <>
        //   <label id={field.id} style={{order:field.columnOrder}} >
        //      {field.label}
        //      <select name={field.id} onChange={handleChange} value={data[field.id]}>
        //      {field.options.map((option, index) => (
        //         <option key={index} value={option}>
        //             {option}
        //          </option>
        //      ))}
        //      </select>
        //   </label>
        // </>

        <SelectLabel field={field} eventHandler={{onChange:handleChange}} data={data} attributes={{name:field.id}} style={{order:field.columnOrder}}/>
    )
}



