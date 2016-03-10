import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-half is-offset-3">
            <h4 className="subtitle is-4">
              Programmers are notorious for their love of cats. This simple App queries the Github API searching for repos
              with cat specific terms of your favorite programming language that you enter below. This App was lovingly
              made using React and Bulma.
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
