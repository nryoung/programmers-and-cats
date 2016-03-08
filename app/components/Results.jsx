import React from 'react';

class Results extends React.Component {

  render() {
    return (
      <div className="results content">
        <h3 className="title is-3"><strong>There are {this.props.totalCount} {this.props.lang} repos that reference our feline companions</strong></h3>
      </div>
    )
  }

}

export default Results;
