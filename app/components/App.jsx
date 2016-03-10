import React from 'react';
import Header from './Header';
import CatGif from './CatGif';
import Intro from './Intro';
import LangForm from './LangForm';
import Results from './Results';
import SampleRepos from './SampleRepos';


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
    this.setState({
      totalCount: response.body.total_count,
      sampleRepos: response.body.items.slice(0, 5),
      lang: lang,
    });
  };

  render() {
      var results = null;
      var sampleRepos = null;

    if(this.state.totalCount && this.state.lang && this.state.sampleRepos){
      results = <Results totalCount={this.state.totalCount} lang={this.state.lang}/>;
      sampleRepos = <SampleRepos repos={this.state.sampleRepos} />;
    }

    return (
      <section className="programmers-and-cats hero is-success is-fullheight">
        <div class="hero-content">
          <div class="container">
            <Header />
            <CatGif />
            <Intro />
            <LangForm catTerms={this.props.catTerms} addResults={this.addResults}/>
            {results}
            {sampleRepos}
          </div>
        </div>
      </section>
    )
  }
}

export default App;
