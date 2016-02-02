import React from 'react';

class Results extends React.Component {

  render() {
    return (
      <div className="results">
        <span>There are {this.props.totalCount} {this.props.lang} repos that reference our feline companions</span>
      </div>
    )
  }

}

export default Results;
