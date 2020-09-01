import React from "react";
import classes from "./FinishedQuiz.module.css"

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>Допущенно ошибок: {props.error} <i className={"fa fa-times"} /> </li>
                <li>Количество вопросов: {props.questionLenght}</li>
            </ul>
            <h4> {props.error > 5 ? "Вы как то не очень" : "Молодцы, хули"}</h4>
            <p>Но это не точно</p>
            <button
                onClick={() => props.refreshQuiz}>Сбросить</button>
        </div>
    )
};
export default FinishedQuiz