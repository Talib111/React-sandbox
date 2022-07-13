import ReactDOM from "react-dom";
const Portal1 = () => {
  return ReactDOM.createPortal(
    <h1>hello</h1>,
    document.getElementById("porttalib")
  );
};

export default Portal1;
