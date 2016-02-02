import React from 'react';
import Header from './Header'
import CatGif from './CatGif'
import LangForm from './LangForm'


class App extends React.Component {
  static defaultProps = {
  catTerms: ['kitten', 'meow', 'feline', 'kitty', 'pussycat']
  };

  render() {
    return (
      <div className="programmers-and-cats">
        <Header />
        <CatGif />
        <LangForm catTerms={this.props.catTerms}/>
      </div>
    )
  }
}

export default App;
