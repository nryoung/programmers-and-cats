import React from 'react';

class SampleRepos extends React.Component {
  render() {
    return (
      <div className="sample-repos">
        {this.props.repos.map(function(repo, i){
          return (
            <div>
              <span key={i}><a href={repo.html_url}>{repo.full_name}</a> {repo.stargazers_count} Stargazers</span>
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}

export default SampleRepos;
