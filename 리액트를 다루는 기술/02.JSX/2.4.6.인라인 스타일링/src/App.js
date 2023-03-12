import "./App.css";

function App() {
  const name = "리액트";
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return <div style={style}>{name}</div>;
}

export default App;

//-------------------------------------------

// import "./App.css";

// function App() {
//   const name = "리액트";
//   return <div style={style = {
//     // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   }}>{name}</div>;
// }

// export default App;
