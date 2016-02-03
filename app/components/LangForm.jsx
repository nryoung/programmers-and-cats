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
      <div>
        <form className="cat-form" ref="langForm" onSubmit={this.queryAPI}>
          <label>Enter your Favorite Programming Language:<br />
            <input type="text" ref="lang" placeholder="e.g. Python" />
          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default LangForm;
