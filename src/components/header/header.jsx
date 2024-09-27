import React from "react";
import style from "./style.module.css";
import header from "../../assets/header.svg";

export const Header = () => {
    return(
       <header className={style.header}>
        <div className={style.header_block}>
        <div className="logo_block">
            <a className="logo_link" href="#">
                <img src={header} alt="logo" />
            </a>
        </div>

        <div className={style.link_block}>
            <ul className={style.list_link}>
            <li>
                <a className={style.link_header} href="#">Pricing</a>
            </li>
            <li>
                <a className={style.link_header} href="#">Product</a>
            </li>
            <li>
                <a className={style.link_header} href="#">About Us</a>
            </li>
            <li>
                <a className={style.link_header} href="#">Careers</a>
            </li>
            <li>
                <a className={style.link_header} href="#">Community</a>
            </li>
            </ul>
        </div>

        <div className={style.header__btn_block}>
            <a className={style.link__header} href="#">Get Started</a>
        </div>
        </div>
        

        
       </header>
    )
}