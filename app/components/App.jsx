import React from 'react';
import Header from './Header'
import CatGif from './CatGif'
import LangForm from './LangForm'


/*
 * App
 */
class App extends React.Component {

  render() {
    return (
      <div className="programmers-and-cats">
        <Header />
        <CatGif />
        <LangForm />
      </div>
    )
  }
}

export default App;
