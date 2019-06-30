import React, { Component } from "react";

import QuizFilter from "./quizFilter/quizFilter.component";
import ContentBox from "./quizArena/mainContentBox";

import { questionBank } from "../../constants/dummyQuestionBank";

import "./quizBody.css";
import { element } from "prop-types";

const THRESHOLD = 10;

export default class QuizBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      currentQuestion: "",
      questionCounter: 0,
      nextQuestion: false,
      filterValue: "any"
    };
    this.selectedAnswerMap = new Map();
  }

  // componentWillMount() {
  //   questionBank[0].incorrect_answers.push(questionBank[0].correct_answer);
  //   this.setState({
  //     questionBank: questionBank,
  //     currentQuestion: Object.assign({}, questionBank[0], {
  //       options: questionBank[0].incorrect_answers
  //     })
  //   });
  // }

  componentDidMount() {
    if (!this.state.questionBank || this.state.questionBank.length <= 0) {
      this.setState({
        questionBank: questionBank,
        currentQuestion: { ...questionBank[0] }
      });
    }
  }

  handleSelectedOption = e => {
    this.selectedAnswerMap.set(this.state.currentQuestion.question, e);
    this.setState({
      nextQuestion: true
    });
  };

  renderQuizContent = () => {
    console.log("CURRENT QUESTION: ", this.state.currentQuestion);
    let options = [...this.state.currentQuestion.incorrect_answers];
    options.push(this.state.currentQuestion.correct_answer);
    return (
      <ContentBox
        questionData={this.state.currentQuestion}
        questionOptions={options}
        selectedOption={this.handleSelectedOption}
      />
    );
  };

  handleButtonClick = () => {
    if (this.state.questionCounter < THRESHOLD - 1) {
      let incCounter = this.state.questionCounter + 1;
      let nextQuestion = { ...this.state.questionBank[incCounter] };
      this.setState(
        {
          nextQuestion: true,
          questionCounter: incCounter,
          currentQuestion: nextQuestion
        },
        () => {
          this.setState({
            nextQuestion: false
          });
          console.log("MAP************* ", this.selectedAnswerMap);
        }
      );
    } else {
      this.setState({
        nextQuestion: false
      });
      console.log("MAP************* ", this.selectedAnswerMap);
    }
  };

  handleSelectCategory = e => {
    this.setState({
      filterValue: e
    });
  };

  renderSubmitButton = () => {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Submit</button>
      </div>
    );
  };

  renderQuizResult = () => {
    let score = 0;
    let totalScore = 100;
    this.state.questionBank.map(qstn => {
      if (this.selectedAnswerMap.get(qstn.question) == qstn.correct_answer) {
        score = score + 10;
      }
    });
    return (
      <div>
        Your score: <b style={{ color: "green" }}>{score}</b>
        <p>
          Accuracy:{" "}
          <b style={{ color: "green" }}>{(score / totalScore) * 100}%</b>
        </p>
      </div>
    );
  };

  render() {
    if (
      this.state.questionBank &&
      this.state.questionBank.length > 0 &&
      this.selectedAnswerMap.size < THRESHOLD
    ) {
      return (
        <div className="quiz-body-main-div">
          <div>
            <QuizFilter
              value={this.state.filterValue}
              onSelectCategory={this.handleSelectCategory}
            />
          </div>
          <div style={{ marginTop: "5%" }}>
            {this.state.questionCounter < THRESHOLD && this.renderQuizContent()}
          </div>
          <div style={{ marginTop: "5%" }}>
            {this.state.currentQuestion &&
              this.state.nextQuestion &&
              this.renderSubmitButton()}
          </div>
        </div>
      );
    } else {
      if (this.selectedAnswerMap.size >= THRESHOLD) {
        return <div>{this.renderQuizResult()}</div>;
      } else {
        return (
          <div>
            <h2>Loading Questions...</h2>
          </div>
        );
      }
    }
  }
}
