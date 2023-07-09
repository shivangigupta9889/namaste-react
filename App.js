const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },[
    React.createElement("h1", {}, "hello i am h1"),React.createElement("h1", {}, "hello i am h1")]
  ),React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "hello i am h1 second")
  )]
);

console.log(header)
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
