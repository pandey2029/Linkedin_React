/* eslint-disable react/prop-types */
import styles from "./Button.module.scss"; // Import CSS module

const buttonTypes = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    activity: styles.activityButton, 
    icon: styles.iconButton, 
};

export default function Button({ type, children, handleClick = () => {}, id }) {
    const buttonClass = buttonTypes[type] || type; 

    return (
        <button id={id} className={buttonClass} onClick={handleClick}>
            {children}
        </button>
    );
}