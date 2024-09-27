import React from "react";
import style from "./style.module.css";
import hero from "../../assets/hero.svg"

export const Hero = () => {
    return(
    <section className={style.hero}>
        <div className={style.hero__block}>
            <div className={style.hero_title_block}>
                <h1 className={style.hero__title}>Bring everyone
together to build
better products.</h1>
                <p className={style.hero__text}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <a className={style.hero__link} href="#">Get Started</a>
            </div>

            <div className={style.hero_img_block}>
                <img src={hero} alt="hero" />
            </div>
        </div>
    </section>
    )
}

