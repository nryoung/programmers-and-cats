import React from 'react';
import request from 'superagent';

class CatGif extends React.Component {

  static defaultProps = {
      giphyURL: 'http://api.giphy.com/v1/gifs/random',
      apiKey: 'dc6zaTOxFJmzC',
      tag: 'cat'
  };

  constructor() {
    super();
    this.state = {gif: undefined}
  }

  componentDidMount()
  {
    request
      .get(this.props.giphyURL)
      .query({tag: this.props.tag, api_key: this.props.apiKey})
      .set('Content-Type', 'application/json')
      .end((err, response) => {
            var gifURL = response.body.data.image_url || undefined;
            if (response.body.meta.status === 200 && gifURL) {
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
