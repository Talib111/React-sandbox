import React from "react";
const Hoc = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 1
      };
    }
    inc = () => {
      this.setState((prevState) => {
        return { name: prevState.name + 1 };
      });
    };
    render() {
      return <OriginalComponent onc={this.inc} name={this.state.name} />;
    }
  }
  return NewComponent;
};

export default Hoc;
