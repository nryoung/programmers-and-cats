import React from 'react';
import Header from './Header'
import CatGif from './CatGif'
import LangForm from './LangForm'
import Results from './Results'


class App extends React.Component {
  static defaultProps = {
  catTerms: ['kitten', 'meow', 'feline', 'kitty', 'pussycat']
  };

  constructor() {
    super();

    this.state = {
      totalCount: null,
      sampleRepos: null,
      lang: null
    };
  }

  addResults = (response, lang) => {
    console.log('addResults called!');
    this.setState({
      totalCount: response.body.total_count,
      sampleRepos: response.body.items.slice(0, 5),
      lang: lang,
    });
  };

  render() {
    if(this.state.totalCount && this.state.lang){
      var results = <Results totalCount={this.state.totalCount} lang={this.state.lang}/>;
    } else {
      results = null;
    }

    return (
      <div className="programmers-and-cats">
        <Header />
        <CatGif />
        <LangForm catTerms={this.props.catTerms} addResults={this.addResults}/>
        {results}
      </div>
    )
  }
}

export default App;
