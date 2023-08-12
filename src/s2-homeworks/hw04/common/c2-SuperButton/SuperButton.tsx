import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  // const finalClassName =
  //   s.button +
  // + (disabled
  //         ? ...
  //         : xType === 'red'
  //             ? ...
  // (className ? " " + className : ""); // задачка на смешивание классов

  // if (xType === "red" && disabled) console.log(`disabled`); //1
  // if (xType === "red" && !disabled) console.log(`red`); //2
  // if (xType === "secondary" && !disabled) console.log("secondary"); //3
  // if (!xType && !disabled) console.log(`default`); //4

  const finalClassName =
    s.button +
    (disabled
      ? " " + s.disabled
      : xType === "red"
      ? " " + s.red
      : xType === "secondary"
      ? " " + s.secondary
      : " " + s.default) +
    (className ? " " + className : "");
  console.log(finalClassName);
  // default
  // default
  // red
  // red
  // disabled
  // disabled
  // secondary
  // secondary

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
