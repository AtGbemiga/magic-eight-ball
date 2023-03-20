import React from "react"
import ReactDOM, { render } from "react-dom"
import eightlogo from "../src/logo.svg"
import './App.css';

// Magic eight ball
class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuestion: "",
      randomAns: null,
    };
    this.questionMtd = this.questionMtd.bind(this);
    this.ansMtd = this.ansMtd.bind(this);
  }
  questionMtd(event) {
    this.setState({ userQuestion: event.target.value });
  }
  ansMtd(event) {
    const randomAns = Math.floor(Math.random() * 20);
    this.setState({
      randomAns: randomAns,
    });
  }
  render() {
    const varringAns = [
      "Ans 1",
      "Ans 2",
      "Ans 3",
      "Ans 4",
      "Ans 5",
      "Ans 6",
      "Ans 7",
      "Ans 8",
      "Ans 9",
      "Ans 10",
      "Ans 11",
      "Ans 12",
      "Ans 13",
      "Ans 14",
      "Ans 15",
      "Ans 16",
      "Ans 17",
      "Ans 18",
      "Ans 19",
      "Ans 20",
    ];
    const answer = varringAns[this.state.randomAns];
    // const answer = this.state.randomAns !== null ? varringAns[this.state.randomAns] : "";
    return (
      <div
        className="container bg-primary m-auto d-flex justify-content-center align-items-center"
        style={{ width: "90vw", height: "80vh" }}
      >
        <div className="text-center" style={{ width: "70%", height: "70%" }}>
          <h2 className="text-light">Ask the Magic 8 Ball</h2>
          <input
            className="col-lg-12 col-md-12 col-sm-12 mt-3 rounded-pill border border-white px-2"
            type="text"
            value={this.state.userQuestion}
            onChange={this.questionMtd}
          />
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-light m-4 fw-bolder fs-xs-6"
              onClick={this.ansMtd}
            >
              Ask the Magic Eight Ball
            </button>
          </div>
          {answer && (
            <div>
              <h4 className="text-light">
                The answer to "{this.state.userQuestion}" is:
              </h4>
              <h3 className="text-light">{answer}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

//Logo
const Logo = () => (
  <div className="bg-white text-center">
    <img src={eightlogo} style={{ width: 150, height: 80 }} alt="Eight ball logo" />
  </div>
);

function App() {
  return (
    <div className="">
      <Logo />
      <MagicEightBall />
    </div>
  );
}

export default App;
