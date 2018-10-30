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
  static propTypes = {
    songName: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    audio: PropTypes.object.isRequired,
    listening: PropTypes.bool.isRequired,
  };

  state = {
    currentTime: 0,
  };

  getTime = () => {
    const { audio, listening } = this.props;
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

  render() {
    const { songName, albumName, audio } = this.props;
    return (
      <DynamicContainer>
        <InfoSong>
          <SongName>{songName}</SongName>
          <AlbumName>{albumName}</AlbumName>
          <NumberTrack>
            <div>0:00</div>
            <div>{this.formatTime(audio.duration)}</div>
          </NumberTrack>
          <Time>
            <LineTrack />
          </Time>
        </InfoSong>
      </DynamicContainer>
    );
  }
}

export default DynamicPlayer;
