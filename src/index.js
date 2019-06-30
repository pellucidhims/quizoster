import React from "react";
import ReactDOM from "react-dom";

import AppBar from "./components/appBar/appBar.component";
import QuizBody from "./components/quizBody";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Main-div">
        <AppBar />
        <QuizBody />
        {/* <QuizBody/>
       <Footer/>  */}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
