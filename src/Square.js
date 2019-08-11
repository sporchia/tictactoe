import React from "react";

class Square extends React.Component {
  static defaultProps = {
    owner: null
  };

  render() {
    const { owner, selected } = this.props;
    return (
      <div
        className={`Square owner-${owner}`}
        owner={owner}
        onClick={selected}
      />
    );
  }
}

export default Square;
