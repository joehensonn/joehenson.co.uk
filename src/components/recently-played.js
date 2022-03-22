import React from "react";
import {ME_API} from '../utilities/settings';
class RecentlyPlayed extends React.Component {

  state = {
    loading: true,
    error: false, 
    fetchedData: []
  }

  componentDidMount() {
    fetch(`${ME_API}/music/top-songs?period=1month&limit=10`)
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
                    <li className="pb-4" key={song.mbid}>{song.name} - <strong>{song.artist.name}</strong></li>
                ))}
            </ul>
        </div>
    )
  }

}

export default RecentlyPlayed;
