import React from "react";
import Placeholder from "../images/placeholder.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../utilities/fontawesome'
import {ME_API} from '../utilities/settings';

class CurrentlyListening extends React.Component {

  state = {
    loading: true,
    error: false, 
    fetchedData: []
  }

  componentDidMount() {
    fetch(`${ME_API}/music/currently-listening`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          fetchedData: json,
          nowPlaying: '@attr' in json.song ? true : false,
          loading: false
        })
      })
      .catch(() => console.log("Can’t access response. Blocked by browser?"))
  }
  
  render() {
    const {fetchedData, loading, nowPlaying} = this.state;

    return (
      <div className="flex mb-4 mt-5">
          <div className="flex lg:w-1/2 md:w-1/2 sm:w-3/4 xs:w-full bg-gray-300 rounded-lg p-5">
              <div className="w-1/4 artwork-visibility">
                  <img id="artwork" src={loading ? Placeholder : fetchedData.song.image[3]['#text']} className="w-20 h-20 rounded-md" alt="Image" />
              </div>
              <div className="md:ml-3 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-full">
                  <div className={loading ? "loading rounded-lg" : "rounded-lg"}>
                    <p className="text-xl font-semibold" id="song">{loading ? 'Loading...' : fetchedData.song.name.length > 20 ? fetchedData.song.name.substring(0, 20) + '...' : fetchedData.song.name}</p>
                  </div>
                  <div className={loading ? "loading-dark rounded-lg" : "rounded-lg"}>
                    <p>{loading ? 'Loading...' : fetchedData.song.album['#text']}</p>
                  </div>
                  <div className={loading ? "loading rounded-lg" : "rounded-lg"}>
                    <p>{loading ? 'Loading...' : fetchedData.song.artist['#text']}<span className="float-right px-3" aria-label={nowPlaying ? "What I'm listening to right now" : "What I was last listening to"} data-balloon-pos="right"><FontAwesomeIcon icon={nowPlaying ? 'volume-up' : 'volume-mute'} /></span></p>
                  </div>
              </div>
          </div>
      </div>
    )
  }

}

export default CurrentlyListening;
