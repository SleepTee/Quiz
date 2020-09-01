import React from "react";
import classes from "./ActiveQuiz.module.css"
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
                    <span>
                <strong>{props.firstQuestion + 1}.</strong>&nbsp;
                        {props.question}
                        </span>
                    <small>{props.firstQuestion + 1} из {props.questionLenght}</small>
                </p>
            <hr/>
            <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
            />
        </div>
    )
};

export default ActiveQuiz;