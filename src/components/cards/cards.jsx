import React from "react";
import style from "./style.module.css"

export const Cards = ({ num, title, text }) => {
    return (
        <div className={style.box}>
          <div className={style.wrapper}>
          <span className={style.num}>{num}</span>
          <h1 className={style.title}>{title}</h1>
          </div>
          
          <p className={style.text}>{text}</p>
        </div>
      );
}