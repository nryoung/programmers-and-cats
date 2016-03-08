import React from 'react';
import request from 'superagent';


class LangForm extends React.Component {

  static defaultProps = {
    apiURL: 'https://api.github.com/search/repositories'
  };

  queryAPI = (event) => {
    event.preventDefault();
    request
      .get(this.props.apiURL)
      .query('q='+this.props.catTerms.join('+OR+') + '+language:' + this.refs.lang.value)
      .query({
        sort: 'stars',
        order: 'desc'})
      .set('Content-Type', 'application/json')
      .end((err, response) => {
        if(response.status === 200){
          this.props.addResults(response, this.refs.lang.value);
        }
      });
  };

  render() {
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-third is-offset-4">
            <form className="cat-form" ref="langForm" onSubmit={this.queryAPI}>
              <label>Enter your favorite programming language:</label>
              <p className="control is-grouped is-centered">
                  <input className="input" type="text" ref="lang" placeholder="e.g. Python" />
                  <input className="button is-primary" type="submit" value="Submit" />
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LangForm;
