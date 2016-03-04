import React from 'react';

class SampleRepos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-third is-offset-4">
            <div className="message is-primary">
              <div className="message-header">
                A small sampling of cat repos
              </div>
              <div className="message-body">
                <div className="content">
                {this.props.repos.map(function(repo, i){
                  return (
                    <p key={i}>
                      <a href={repo.html_url}>{repo.full_name}</a> {repo.stargazers_count} Stargazers
                      <br />
                    </p>
                  )
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SampleRepos;
