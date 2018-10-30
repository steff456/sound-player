/**
 *
 * MainPlayer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  DynamicContainer,
  InfoSong,
  SongName,
  AlbumName,
  NumberTrack,
  Time,
  LineTrack,
} from './components';

/* eslint-disable react/prefer-stateless-function */
export class DynamicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = React.createRef();
  }

  static propTypes = {
    songName: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    audio: PropTypes.object.isRequired,
    currentTime: PropTypes.number,
    width: PropTypes.number,
    moveLineTrack: PropTypes.func.isRequired,
  };

  formatTime = timeSec => {
    const hours = Math.floor(timeSec / 3600);
    let min = Math.floor((timeSec - hours * 3600) / 60);
    let sec = Math.floor(timeSec - hours * 3600 - min * 60);

    if (min < 10) {
      min = `0${min}`;
    }
    if (sec < 10) {
      sec = `0${sec}`;
    }

    return `${min}:${sec}`;
  };

  handleClick = e => {
    const timelineWidth = this.timeline.current.offsetWidth;
    const handleLeft = e.pageX - this.timeline.current.offsetLeft;
    console.log(e.pageX);
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      const newWidth = (handleLeft / timelineWidth) * 100;
      this.props.moveLineTrack(newWidth);
    }
  };

  render() {
    const { songName, albumName, audio, currentTime, width } = this.props;
    const { duration } = audio;
    return (
      <DynamicContainer>
        <InfoSong>
          <SongName>{songName}</SongName>
          <AlbumName>{albumName}</AlbumName>
          <NumberTrack>
            <div>{this.formatTime(currentTime)}</div>
            <div>{this.formatTime(duration)}</div>
          </NumberTrack>
          <Time ref={this.timeline} onClick={this.handleClick}>
            <LineTrack track={`${width}%`} />
          </Time>
        </InfoSong>
      </DynamicContainer>
    );
  }
}

export default DynamicPlayer;
