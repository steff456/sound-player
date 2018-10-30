/**
 *
 * MainPlayer
 *
 */

import React from 'react';
import axios from 'axios';

import DynamicPlayer from './dynamicPlayer';

import {
  Container,
  AlbumArt,
  AlbumCenter,
  PlayerButtons,
  PlayerIcon,
} from './components';
/* eslint-disable react/prefer-stateless-function */
export class StaticPlayer extends React.Component {
  state = {
    listening: false,
    actSong: 0,
    currentTime: 0,
    width: 0,
  };

  albums = [
    'Amanecer',
    'Me & You',
    'Electro Boy',
    'Home',
    'Proxy (Original Mix)',
  ];

  trackNames = [
    'Bomba Estereo - To My Love',
    'Alex Skrindo - Me & You',
    'Kaaze - Electro Boy',
    'Jordan Schor - Home',
    'Martin Garrix - Proxy',
  ];

  albumArtworks = [
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Amanecer_album_cover.jpg/220px-Amanecer_album_cover.jpg',
    'http://k003.kiwi6.com/hotlink/ifpd9xk6n4/2.jpg',
    'http://k003.kiwi6.com/hotlink/36u2tfrwiu/3.jpg',
    'http://k003.kiwi6.com/hotlink/l633hnztuz/4.jpg',
    'http://k003.kiwi6.com/hotlink/0yp24xn1o8/5.jpg',
  ];

  trackUrl = [
    new Audio(
      'https://d2tml28x3t0b85.cloudfront.net/tracks/stream_files/000/696/722/original/Bomba%20Est%C3%A9reo%20-%20To%20My%20Love%20%28Moombahton%20Bootleg%29.mp3?1514668785',
    ),
    new Audio('https://k003.kiwi6.com/hotlink/2rc3rz4rnp/1.mp3'),
    new Audio('https://k003.kiwi6.com/hotlink/2rc3rz4rnp/1.mp3'),
    new Audio('http://k003.kiwi6.com/hotlink/gt2rduy0mo/3.mp3'),
    new Audio('http://k003.kiwi6.com/hotlink/421ezo6l38/4.mp3'),
    new Audio('http://k003.kiwi6.com/hotlink/3j1d3r8a4t/5.mp3'),
  ];

  playSong = () => {
    const { actSong } = this.state;
    const song = this.trackUrl[actSong];
    this.play(song);
  };

  stopSong = () => {
    const { actSong } = this.state;
    const song = this.trackUrl[actSong];
    song.pause();
    this.setState({
      listening: false,
    });
  };

  back = () => {
    const { actSong } = this.state;
    this.stopSong();
    const bef = actSong - 1;
    if (bef >= 0) {
      const song = this.trackUrl[bef];
      this.play(song);
      this.setState({
        listening: true,
        actSong: bef,
      });
    }
  };

  next = () => {
    const { actSong } = this.state;
    this.stopSong();
    const next = actSong + 1;
    if (next < this.trackUrl.length) {
      const song = this.trackUrl[next];
      this.play(song);
      this.setState({
        listening: true,
        actSong: next,
      });
    }
  };

  widthLineTrack = (currentTime, duration) => (currentTime / duration) * 100;

  play = song => {
    song.play();
    this.setState({
      listening: true,
    });
    song.addEventListener('timeupdate', () => {
      const { currentTime, duration } = song;
      const width = this.widthLineTrack(currentTime, duration);
      this.setState({
        currentTime,
        width,
      });
    });
  };

  moveLineTrack = width => {
    const { actSong } = this.state;
    const song = this.trackUrl[actSong];
    const currentTime = (width * song.duration) / 100;
    song.currentTime = currentTime;
    this.setState({
      width,
      currentTime,
    });
  };

  render() {
    const { actSong, listening, currentTime, width } = this.state;
    const name = this.trackNames[actSong];
    const album = this.albums[actSong];
    const audio = this.trackUrl[actSong];
    const rotate = listening
      ? 'rotateAlbumArt 3s linear 0s infinite forwards'
      : '';
    const topAlbum = listening ? '-60px' : '-40px';
    const bottomDynamic = listening ? '100px' : '0px';
    return (
      <div>
        <DynamicPlayer
          songName={name}
          albumName={album}
          audio={audio}
          currentTime={currentTime}
          width={width}
          moveLineTrack={this.moveLineTrack}
          height={bottomDynamic}
        />
        <Container>
          <AlbumArt animation={rotate} top={topAlbum}>
            <AlbumCenter />
            <img src={this.albumArtworks[actSong]} alt="Album cover" />
          </AlbumArt>
          <PlayerButtons className="d-flex justify-content-end">
            <PlayerIcon name="backward" size="large" onClick={this.back} />
            {!listening && (
              <PlayerIcon name="play" size="large" onClick={this.playSong} />
            )}
            {listening && (
              <PlayerIcon name="pause" size="large" onClick={this.stopSong} />
            )}
            <PlayerIcon name="forward" size="large" onClick={this.next} />
          </PlayerButtons>
        </Container>
      </div>
    );
  }
}

export default StaticPlayer;
