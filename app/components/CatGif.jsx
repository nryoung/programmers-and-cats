import React from 'react';
import request from 'superagent';

class CatGif extends React.Component {

  constructor() {
    super();
    this.state = {
      gif: undefined,
      giphyURL: 'http://api.giphy.com/v1/gifs/random',
      apiKey: 'dc6zaTOxFJmzC',
      tag: 'cat'
    }
  }

  componentDidMount()
  {
    request
      .get(this.state.giphyURL)
      .query({tag: this.state.tag, api_key: this.state.apiKey})
      .set('Content-Type', 'application/json')
      .end(function(err, response) {
            var gifURL = response.body.data.image_url || undefined;
            if (response.body.meta.status == 200 && gifURL) {
              this.setState({
                gif: gifURL
              });
            }
          });
  }

  render() {
    return (
      <div className="cat-gif">
        <img src={this.state.gif} />
      </div>
    )
  }
}

export default CatGif;
