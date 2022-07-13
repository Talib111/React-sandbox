const Wrapper = (props) => {
  return (
    <>
      <h1>I am wrapper component</h1>
      {props.children}
    </>
  );
};

export default Wrapper;
