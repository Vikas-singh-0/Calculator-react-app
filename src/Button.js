import styles from "./App.module.css";
import React, { useEffect, useState } from "react";

const Button = (props) => {
  let classes = `${props.classame} ${styles.border}`;
  const [c, sc] = useState(classes);

  if (props.name === 0) {
    classes = `${c} ${styles.grow} `;
  } else if (props.name === ".") {
    classes = `${c} ${styles.shrink} `;
  } else {
    classes = `${c} `;
  }

  // classes += ` ${styles.bump}`;

  const onclick = () => {
    props.onClick(props.name);

    // console.log("bump");
    // props.onClick(props.name);
    classes += ` ${styles.bump}`;
    sc(classes);
    setTimeout(() => {
      classes = `${props.classame} ${styles.border}`;
      sc(classes);
    }, 300);
    // console.log(classes);
  };

  return (
    <div onClick={onclick} className={classes}>
      {props.name}{" "}
    </div>
  );
};

export default Button;
