import React from "react";

class RecentlyPlayed extends React.Component {

  state = {
    loading: true,
    error: false, 
    fetchedData: []
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://ancient-fjord-66964.herokuapp.com/spotify/getRecentTracks?limit=9";

    console.log(proxyurl + url);
    fetch(proxyurl + url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          fetchedData: json,
          loading: false
        })
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
  }
  
  render() {
    const {fetchedData, loading} = this.state;

    return (
        <div>
            {loading ? <p className="bg-gray-200 rounded-lg p-4 text-lg pt-3 mt-3">Loading...</p> : ''}
            <ul className="list-disc m-3 ml-10 text-xl">
                {fetchedData.map(song => (
                    <li className="pb-4" key={song.id}>{song.song_name} - <strong>{song.artist}</strong></li>
                ))}
            </ul>
        </div>
    )
  }

}

export default RecentlyPlayed;
