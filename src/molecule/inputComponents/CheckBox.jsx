/* eslint-disable react/prop-types */
export default function CheckBox({field}){
    return(<>
        <label id={field.id} style={{order:field.columnOrder}}>
            {field.label}
            <input type="checkbox" />
        </label>
    </>)
}