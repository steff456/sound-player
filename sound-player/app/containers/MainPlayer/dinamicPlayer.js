/**
 *
 * MainPlayer
 *
 */

import React from 'react';
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
export class DinamicPlayer extends React.Component {
  render() {
    return (
      <DynamicContainer>
        <InfoSong>
          <SongName>Holi</SongName>
          <AlbumName>Nombre del Albumcito</AlbumName>
          <NumberTrack>
            <div>0:00</div>
            <div>5:00</div>
          </NumberTrack>
          <Time>
            <LineTrack />
          </Time>
        </InfoSong>
      </DynamicContainer>
    );
  }
}

export default DinamicPlayer;
