import Hoc from "./Hoc";

const OrginalComp = (props) => {
  return (
    <>
      <h1>increment count = {props.name} </h1>
      <br />
      <button onClick={props.onc}>Inc</button>
    </>
  );
};

export default Hoc(OrginalComp);
