import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";

export default function App() {
  const buttonsWhiteTop = ["AC", "+/-", "%", 7, 8, 9, 4, 5, 6, 1, 2, 3];
  const buttonWhiteBottom = [0, "."];
  const buttonOrange = ["/", "x", "-", "+", "="];
  const signButtons = ["/", "x", "-", "+", "%", "+/-"];
  const [expression, setExpression] = useState("");
  const [last, setlast] = useState("");
  const [first, setFirst] = useState("");
  const [sign, setSign] = useState(false);
  const [cal, setCal] = useState("");
  // console.log("lenght: ", expression.length);

  // const lastE = expression.charAt(expression.length - 1);

  const onOnclickhandle = (button) => {
    console.log(button, " is clicked");
    if (button === "AC") {
      setSign(false);
      setCal("");
      setExpression("");
      return;
    }
    if (button === "=") {
      const [num1, num2] = expression.split(/[+|x|//-]/);

      setSign(false);
      setCal("");
      switch (cal) {
        case "+":
          let res = (parseInt(num1) + parseInt(num2)).toString();
          setExpression((prev) => res);
          break;
        case "-": {
          let res = parseInt(num1) - parseInt(num2).toString();
          console.log(res, num1, num2);

          setExpression((prev) => res);
          break;
        }
        case "x": {
          let res = (parseInt(num1) * parseInt(num2)).toString();
          setExpression((prev) => res);
          break;
        }
        case "/": {
          let res = (parseInt(num1) / parseInt(num2)).toString();
          setExpression((prev) => res);
          break;
        }
        default:
          break;
      }
    }
    // to add logic

    if (!sign) {
      if (signButtons.includes(button)) {
        setCal(button);
        // console.log("button",button);
        setExpression((prev) => prev + button);
        setSign(true);
      } else {
        setExpression((prev) => prev + button);
      }
    } else {
      if (signButtons.includes(button)) {
        // const sign = button;
      } else {
        setExpression((prev) => prev + button);
      }
    }

    //nhi chal rha lodu
    // khana kha rhe

    // if (expression === "0") {
    //   setExpression((prev) => "" + button);
    // } else {
    //   setExpression((prev) => prev + button);
    // }

    // console.log(typeof expression);
    // setExpression((prevState)=>prevState+button)

    // expression += button;
    console.log("expression", expression);
  };

  const buttonsWhiteTopList = buttonsWhiteTop.map((element) => (
    <Button
      name={element}
      onClick={onOnclickhandle}
      classame={styles.button_top_white}
    />
  ));
  const buttonWhiteBottomList = buttonWhiteBottom.map((element) => (
    <Button
      name={element}
      onClick={onOnclickhandle}
      classame={styles.button_bottm_white}
    />
  ));
  const buttonOrangeList = buttonOrange.map((element) => (
    <Button
      name={element}
      onClick={onOnclickhandle}
      classame={styles.button_orange}
    />
  ));

  // logic to calculate

  return (
    <>
      <div className={styles.main}>
        {/* display for calculations */}
        <div className={styles.display}>{expression}</div>

        <div className={styles.buttonss}>
          <div className={styles.white}>
            <div className={styles.top_white}>{buttonsWhiteTopList}</div>
            <div className={styles.bottom_white}>{buttonWhiteBottomList}</div>
          </div>
          <div className={styles.orange}>{buttonOrangeList}</div>
        </div>
      </div>
    </>
  );
}
