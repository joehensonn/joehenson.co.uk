import React from "react";
import Placeholder from "../images/placeholder.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../utilities/fontawesome'

class CurrentlyListening extends React.Component {

  state = {
    loading: true,
    error: false, 
    fetchedData: []
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://ancient-fjord-66964.herokuapp.com/spotify/getRecentTrack";
    fetch(proxyurl + url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          fetchedData: json,
          loading: false
        })
      })
      .catch(() => console.log("Can’t access response. Blocked by browser?"))
  }
  
  render() {
    const {fetchedData, loading} = this.state;

    return (
        <div className="flex mb-4 mt-5" id="music-player">
            <div className="flex lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-full bg-gray-300 rounded-lg p-5">
                <div className="w-1/4">
                    <img id="artwork" src={loading ? Placeholder : fetchedData.artwork_lg} className="w-20 h-20 rounded-md" alt="Image" />
                </div>
                <div className="ml-3 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-full">
                    <div className={loading ? "loading rounded-lg" : "rounded-lg"}>
                      <p className="text-2xl font-semibold" id="song">{loading ? 'Loading...' : fetchedData.song_name}</p>
                    </div>
                    <div className={loading ? "loading-dark rounded-lg" : "rounded-lg"}>
                      <p>{loading ? 'Loading...' : fetchedData.album}</p>
                    </div>
                    <div className={loading ? "loading rounded-lg" : "rounded-lg"}>
                      <p>{loading ? 'Loading...' : fetchedData.artist}<span className="float-right"><FontAwesomeIcon icon={fetchedData.currently_listening == 0 ? 'volume-mute' : 'volume-up'} /></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

}

export default CurrentlyListening;
