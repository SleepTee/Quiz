import React , {Component} from "react";
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../component/FinishedQuiz/FinishedQuiz";

class Quiz extends Component{
    state = {
        results: {},
        quizFinished: false,
        questionNumber:0,
        answerState: null,
        point: 0,
        error:0,
        quiz : [
            {
                question: "Продолжите фразу 'Building is on...?'",
                rightAnswerId: 3,
                id:1,
                answers: [
                    {text:"Cold" , id:1},
                    {text:"Cream", id:2},
                    {text:"Fire", id:3},
                    {text:"i don't now", id:4},
            ]
            },
            {
                question: "На что у меня аллергия?'",
                rightAnswerId: 4,
                id:2,
                answers: [
                    {text:"Пыль" , id:1},
                    {text:"Луговые цветы", id:2},
                    {text:"Пепси-Колу", id:3},
                    {text:"Да хуй знает, кажеться что на все сразу блять!", id:4},
                ]
            },
            {
                question: "Как переводится название сериала 'Lacasa de Papel'",
                rightAnswerId: 2,
                id:3,
                answers: [
                    {text:"Утром будет лучше" , id:1},
                    {text:"Бумажный дом", id:2},
                    {text:"Домик у моря", id:3},
                    {text:"Булочка с маком", id:4},
                ]
            }
        ],

    };

    onAnswerClickHandler = answerId => {
        const quizState = this.state.quiz[this.state.questionNumber]
        if (quizState.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId] : "success"},
                point:this.state.point + 1
            });

            const timeout = window.setTimeout( () => {
                if (this.questionFinished()) {
                    this.setState({
                        quizFinished: true
                    })
                } else {
                    this.setState({
                        questionNumber: this.state.questionNumber + 1,
                        answerState:null
                    })

                } window.clearTimeout(timeout)
            },1000)
        } else {
            this.setState({
                answerState: {[answerId]: "error"},
                error: this.state.error + 1
            })
        }
    };

    questionFinished = () => {
        return  this.state.questionNumber + 1 === this.state.quiz.length
};

    refreshQuiz = () => {
        this.setState( {
            questionNumber:0,
            answerState:null,
            quizFinished:false,
        })
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1 style={{textAlign:"center"}}>Опросник</h1>
                    {this.state.quizFinished ?
                        <FinishedQuiz
                        questionLenght={this.state.quiz.length}
                        point={this.state.point}
                        error={this.state.error}
                        refreshQuiz={this.state.refreshQuiz}
                        />
                        :
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.questionNumber].answers}
                            question={this.state.quiz[this.state.questionNumber].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            questionLenght={this.state.quiz.length}
                            firstQuestion={this.state.questionNumber}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}
export default Quiz