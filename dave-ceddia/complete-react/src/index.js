import ReactDom from "react-dom";
import "./index.css";

/*
function greet(name) {
  return (
    "Hi " + name;
  )
}
*/

function greet(name) {
  return "Hi " + name;
}

function Hi() {
  return (
    <>
    Hello, <strong>Eric</strong>
    <body>
      <div className="check">
        check
      </div>
      {5 +10}
    </body>
    </>
  )
}

ReactDom.render(<Hi />, document.querySelector("#root"));