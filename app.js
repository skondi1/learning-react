const heading = React.createElement(
    "h1",{id : "heading"},"Hello World from R");

const root = ReactDOM.createRoot(document.getElementById("root"));



const parent = React.createElement(
    "div",{ id:"parent"}, React.createElement(
        "div", { id:"child"}, React.createElement(
            "h1",{}, "I'm h1"))
);
root.render(parent);
console.log(parent);