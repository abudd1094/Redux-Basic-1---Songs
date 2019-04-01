import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  
  render() {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// getting data from our Redux store into our component
const mapStateToProps = (state) => { // allows us to access our Redux state through the components props
  console.log(state); // preview our new state
  return { songs: state.songs };
}

export default connect(mapStateToProps, { // connect function looks at all the included functions and wraps them up in another JS function which when called automatically calls the action creator, the returned action, and the dispatch function -- so we don't have to do this manually
  selectSong: selectSong // passing action creator inside object to the react-redux connect function
})(SongList);


