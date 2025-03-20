/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TextArea from "../../molecule/inputComponents/TextArea";
import TextBox from "../../molecule/inputComponents/TextBox";
import SelectBox from "../../molecule/inputComponents/SelectBox";
import CheckBox from "../../molecule/inputComponents/CheckBox";
import styles from "./Form.module.scss"
import FormHeader from "./FormHeader";
import Footer from "./Footer";
import modalEvent from "../../utils/event";
import Submit from "./Submit";
export default function Form(props) {
    const functionMapper = new Map();
    functionMapper.set("input", TextBox);
    functionMapper.set("select", SelectBox);
    functionMapper.set("textarea", TextArea);
    functionMapper.set("checkbox", CheckBox);

    
    return (
        <div id={styles.modal}>
            <div id={styles.tab}>
                <FormHeader heading={props.heading} />
                <form onSubmit={props.handleSubmit} className={styles.form}>
                    {props.fields.map((groupField) => (
                        <div key={`row${groupField[0].rowOrder}`} className={groupField.length > 1 ? styles.modalSelect : ""}>
                            {groupField.map((field) => {
                                const Component = functionMapper.get(field.type);
                                return Component ? <Component key={field.name} field={field} handleChange={props.handleChange} data={props.formData} /> : null;
                            })}
                        </div>
                    ))}
                    <Footer />
                </form>
            </div>
        </div>
    )
}