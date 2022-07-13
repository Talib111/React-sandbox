/**
 * This is Redux view where we access global data or we modify global data with actions
 */
import { connect } from "react-redux";
const View = (props) => {
  return (
    <>
      <h1>
        I am redux view with count = {props.count} and age is {props.age}
      </h1>
      <button onClick={() => props.buyCake("salt")}>+ Count</button>
      <br />
      <br />
      <button onClick={() => props.cngCake("my data")}>change value</button>
    </>
  );
};

//for redux
const mapStateToProps = (state) => {
  return {
    count: state.count,
    age: state.age
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    buyCake: (data2) => dispatch({ type: "GOOD", data2: data2 }),
    cngCake: (data3) => dispatch({ type: "BAD", data3: data3 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
