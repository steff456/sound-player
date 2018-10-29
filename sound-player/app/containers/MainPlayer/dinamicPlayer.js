/**
 *
 * MainPlayer
 *
 */

import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  height: 8px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: end;
  align-items: end;
  background-color: ${props => props.theme.midGrey};
`;

const DinamicContainer = styled.div`
  height: 90px;
  position: absolute;
  bottom: 100px;
  width: 90%;
  background-color: ${props => props.theme.darkGrey};
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 1;
  margin: auto;
  left: 0;
  right: 0;
`;

const SongName = styled.div`
  color: ${props => props.theme.lightGrey};
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 17px;
  font-weight: bold;
`;

const AlbumName = styled.div`
  color: ${props => props.theme.textColor};
  height: 100%;
  width: 100%;
  font-size: 14px;
`;

const InfoSong = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  padding: 10px;
  margin-left: 200px;
  flex-direction: column;
`;

const NumberTrack = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  margin-bottom: 9px;
`;

const LineTrack = styled.div`
  display: flex;
  width: 60%;
  background-color: ${props => props.theme.secondaryColor};
  height: 8px;
`;

/* eslint-disable react/prefer-stateless-function */
export class DinamicPlayer extends React.Component {
  render() {
    return (
      <DinamicContainer>
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
      </DinamicContainer>
    );
  }
}

export default DinamicPlayer;
