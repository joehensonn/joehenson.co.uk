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
      <div className="flex mb-4 mt-5">
          <div className="flex lg:w-1/2 md:w-1/2 sm:w-3/4 xs:w-full bg-gray-300 rounded-lg p-5">
              <div className="w-1/4 artwork-visibility">
                  <img id="artwork" src={loading ? Placeholder : fetchedData.artwork_lg} className="w-20 h-20 rounded-md" alt="Image" />
              </div>
              <div className="md:ml-3 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-full">
                  <div className={loading ? "loading rounded-lg" : "rounded-lg"}>
                    <p className="text-xl font-semibold" id="song">{loading ? 'Loading...' : fetchedData.song_name.substring(0, 24)}</p>
                  </div>
                  <div className={loading ? "loading-dark rounded-lg" : "rounded-lg"}>
                    <p>{loading ? 'Loading...' : fetchedData.album}</p>
                  </div>
                  <div className={loading ? "loading rounded-lg" : "rounded-lg"}>
                    <p>{loading ? 'Loading...' : fetchedData.artist}<span className="float-right" aria-label={fetchedData.currently_listening == 0 ? "What I was last listening to" : "What I'm listening to right now"} data-balloon-pos="right"><FontAwesomeIcon icon={fetchedData.currently_listening == 0 ? 'volume-mute' : 'volume-up'} /></span></p>
                  </div>
              </div>
          </div>
      </div>
    )
  }

}

export default CurrentlyListening;
