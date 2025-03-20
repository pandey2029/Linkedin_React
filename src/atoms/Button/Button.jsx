/* eslint-disable react/prop-types */
import styles from "./Button.module.scss"; 

const BUTTON_TYPES = {
    PRIMARY:"primary",
    SECONDARY:"secondary",
    TERTIARY:"tertiary",
    ACTIVITY:"activity",
    ICON:"icon"
};
const BUTTON_TYPE_CLASSNAME={

    [BUTTON_TYPES.PRIMARY]:styles.primary,
    [BUTTON_TYPES.SECONDARY]:styles.secondary,
    [BUTTON_TYPES.TERTIARY]:styles.tertiary,
    [BUTTON_TYPES.ACTIVITY]:styles.activityButton,
    [BUTTON_TYPES.ICON]:styles.iconButton,
}

export default function Button({ type, children, handleClick = () => {}, id }) {
    const buttonClass = BUTTON_TYPE_CLASSNAME[type] || type; 

    return (
        <button id={id} className={buttonClass} onClick={handleClick}>
            {children}
        </button>
    );
}