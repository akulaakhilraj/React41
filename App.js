// const heading=React.createElement("h1",{id:"heading"},"Hello,Welcome to World of Development");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);

const parent=React.createElement("div", {id:"parent"},
React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading"},"Hello World, Welcome to the Development"),
    React.createElement("h1",{id:"heading"},"Welcome to the WEB Development")
]
)
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);