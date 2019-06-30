import React, { Component } from "react";

import QuizFilter from "./quizFilter/quizFilter.component";
import ContentBox from "./quizArena/mainContentBox";

import { questionBank } from "../../constants/dummyQuestionBank";

const THRESHOLD = 10;

export default class QuizBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      currentQuestion: "",
      questionCounter: 0,
      nextQuestion: true
    };
  }

  componentWillMount() {
    questionBank[0].incorrect_answers.push(questionBank[0].correct_answer);
    this.setState({
      questionBank: questionBank,
      currentQuestion: Object.assign({}, questionBank[0], {
        options: questionBank[0].incorrect_answers
      })
    });
  }

  componentDidMount() {
    if (!this.state.questionBank || this.state.questionBank.length <= 0) {
      questionBank[0].incorrect_answers.push(questionBank[0].correct_answer);
      this.setState({
        questionBank: questionBank,
        currentQuestion: Object.assign({}, questionBank[0], {
          options: questionBank[0].incorrect_answers
        })
      });
    }
  }

  renderQuizContent = () => {
    console.log("State: ", this.state);
    return (
      <ContentBox
        question={this.state.currentQuestion.question}
        questionOptions={this.state.currentQuestion.options}
      />
    );
  };

  handleButtonClick = () => {
    if (this.state.questionCounter <= THRESHOLD) {
      let incCounter = this.state.questionCounter + 1;
      let nextQuestion = this.state.questionBank[incCounter];
      this.state.questionBank[incCounter].incorrect_answers.push(
        this.state.questionBank[incCounter].correct_answer
      );
      this.setState(
        {
          nextQuestion: true,
          questionCounter: incCounter,
          currentQuestion: Object.assign({}, nextQuestion, {
            options: this.state.questionBank[incCounter].incorrect_answers
          })
        },
        () => {
          this.setState({
            nextQuestion: false
          });
        }
      );
    }
  };

  renderSubmitButton = () => {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Submit</button>
      </div>
    );
  };

  render() {
    if (this.state.questionBank && this.state.questionBank.length > 0) {
      return (
        <div>
          <QuizFilter />
          {this.state.questionCounter <= THRESHOLD &&
            this.state.nextQuestion &&
            this.renderQuizContent()}
          {this.state.currentQuestion && this.renderSubmitButton()}
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading Questions...</h2>
        </div>
      );
    }
  }
}
