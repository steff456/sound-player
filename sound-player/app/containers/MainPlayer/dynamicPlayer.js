/**
 *
 * MainPlayer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

import {
  DynamicContainer,
  InfoSong,
  SongName,
  AlbumName,
  NumberTrack,
  Time,
  LineTrack,
  MouseTrack,
} from './components';

/* eslint-disable react/prefer-stateless-function */
export class DynamicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = React.createRef();
  }

  state = {
    mouseWidth: 0,
  };

  static propTypes = {
    songName: PropTypes.string,
    albumName: PropTypes.string,
    audio: PropTypes.object,
    currentTime: PropTypes.number,
    width: PropTypes.number,
    moveLineTrack: PropTypes.func,
    height: PropTypes.string,
    mouseTime: PropTypes.number,
    getMouseTime: PropTypes.func,
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
    const handleLeft =
      e.pageX -
      this.timeline.current.offsetLeft -
      this.timeline.current.offsetParent.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      const newWidth = (handleLeft / timelineWidth) * 100;
      this.props.moveLineTrack(newWidth);
    }
  };

  onMouseOver = e => {
    console.log('Mouse over!!');
    const timelineWidth = this.timeline.current.offsetWidth;
    const handleLeft =
      e.pageX -
      this.timeline.current.offsetLeft -
      this.timeline.current.offsetParent.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      const newWidth = (handleLeft / timelineWidth) * 100;
      this.props.getMouseTime(newWidth);
      this.setState({
        mouseWidth: newWidth,
      });
    }
  };

  mouseOut = () => {
    this.setState({
      mouseWidth: 0,
    });
  };

  render() {
    const {
      songName,
      albumName,
      audio,
      currentTime,
      width,
      height,
      mouseTime,
    } = this.props;
    const { mouseWidth } = this.state;
    const style = { heigh: '100%', width: '100%' };
    const duration = audio === undefined ? 0 : audio.duration;
    return (
      <DynamicContainer bottom={height}>
        <InfoSong>
          <SongName>{songName}</SongName>
          <AlbumName>{albumName}</AlbumName>
          <NumberTrack>
            <div>{this.formatTime(currentTime)}</div>
            <div>{this.formatTime(duration)}</div>
          </NumberTrack>
          <div
            style={style}
            onMouseOver={this.onMouseOver}
            onMouseEnter={this.onMouseOver}
            onMouseMove={this.onMouseOver}
            onMouseOut={this.mouseOut}
          >
            <Time ref={this.timeline} onClick={this.handleClick}>
              <LineTrack track={`${width}%`} />
              <Popup
                trigger={<MouseTrack mouse={`${mouseWidth}%`} />}
                content={this.formatTime(mouseTime)}
                position="top right"
                size="mini"
                on="hover"
              />
            </Time>
          </div>
        </InfoSong>
      </DynamicContainer>
    );
  }
}

export default DynamicPlayer;
