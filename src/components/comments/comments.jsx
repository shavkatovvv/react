import React from "react";
import style from "./style.module.css"
import woman from "../../assets/woman.svg"


export const Comment = () => {
    return(
        <section className={style.comment}>
            <h2 className={style.title}>What they’ve said</h2>
            <div className={style.box}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <div className={style.img_block}>
                            <img className={style.img} src={woman} alt="woman" />
                        </div>
                        <h3 className={style.title__sm}>Anisha Li</h3>
                        <p className={style.text}>  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </li>

                    <li className={style.item}>
                        <div className={style.img_block}>
                            <img className={style.img} src={woman} alt="woman" />
                        </div>
                        <h3 className={style.title__sm}>Anisha Li</h3>
                        <p className={style.text}>  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}