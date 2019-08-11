import React from "react";

class Square extends React.Component {
  static defaultProps = {
    owner: null
  };

  render() {
    const { owner } = this.props;
    return <div className={`Square owner-${owner}`} owner={owner} />;
  }
}

export default Square;
