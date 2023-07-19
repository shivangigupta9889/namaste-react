import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
// React.createElement =>object=> HTMLelement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Hello Shivangi ");
// console.log(heading);
// jsx => (transpilled before it reaches the javascript engine )and it is done by PARCEL and parcel uses babel
// babel takes jsx and compiled or convert into the code that js engine or browser understand .
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
