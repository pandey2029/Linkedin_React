import Icon from "./../../atoms/icons/Icon";
import Button from "./../../atoms/Button/Button";
import React from "react";
import styles from "./Header.module.scss";

export default function Header(props) {
  const {idLeft,
    idRight,
    id,
    leftContent = [],
    rightContent = [],
    border = "",
    paddingLR = "",
    contentSize = "",
    paddingTB = "",
  className=""}=props
  const classSt = className.split(" ").map((cl) => styles[cl] || "").join(" ");
  const classStyle = `${styles.sectionHeader} ${
    border ? styles[`border-${border}`] : ""
  } ${paddingTB === "zero" ? styles["paddingTBZero"] : ""} ${
    paddingLR === "zero" ? styles["paddingLRZero"] : ""
  } ${classSt}`;

  function renderContent(contentList) {
    return contentList.map((comp, index) => {
      const { id, type, props = {} } = comp;

      const newProps = {
        ...props,
        children:
          props.children && Array.isArray(props.children)
            ? renderContent(props.children)
            : props.children,
      };

    //   if (typeof type === "function") {
    //     return React.createElement(type, {
    //       key: id ? id : index,
    //       id: id ? id : "",
    //       ...newProps,
    //     });
    //   } 
        if (typeof type === "function") {
        
        const Component = type;
        return <Component key={id || index} id={id || ""} {...newProps} />;
      }
      else if (typeof type === "string") {
        if (type === "text") {
          return newProps.children;
        }
        const Element = type;
        return (
          <Element
            id={id ? id : ""}
            key={id ? id : index}
            {...newProps}
          ></Element>
        );
      }

      return null;
    });
  }
  return (
    <>
      <div id={id ? id : undefined} className={classStyle}>
        <div
          id={idLeft ? idLeft : undefined}
          className={
            contentSize
              ? styles[`sectionHeaderLeft-${contentSize}`]
              : styles.sectionHeaderLeft
          }
        >
          {renderContent(leftContent)}
        </div>
        <div
          id={idRight ? idRight : undefined}
          className={styles.sectionHeaderRight}
        >
          {renderContent(rightContent)}
        </div>
      </div>
    </>
  );
}
