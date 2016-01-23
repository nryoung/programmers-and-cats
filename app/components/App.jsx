import React from 'react';
import Header from './Header'
import CatGif from './CatGif'


/*
 * App
 */
class App extends React.Component {

  render() {
    return (
      <div className="programmers-and-cats">
        <Header />
        <CatGif />
      </div>
    )
  }
}

export default App;
