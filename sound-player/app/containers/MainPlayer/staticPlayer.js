/**
 *
 * MainPlayer
 *
 */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const PlayerIcon = styled(Icon)`
  color: ${props => props.theme.midGrey};
  padding: 25px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  transition: all 0.3s ease;
  &:hover,
  &:focus,
  &.active {
    color: ${props => props.theme.secondaryColor};
  }
`;

const AlbumArt = styled.div`
  position: absolute;
  top: -40px;
  left: 40px;
  width: 115px;
  height: 115px;
  margin-left: 40px;
  -webkit-transform: rotateZ(0);
  transform: rotateZ(0);
  transition: 0.3s ease all;
  box-shadow: 0 0 0 10px #fff;
  border-radius: 50%;
  overflow: hidden;
`;

const AlbumCenter = styled.div`
  margin: auto;
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #fff;
  z-index: 2;
`;

const Container = styled.div`
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 3;
`;

const PlayerButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
`;

/* eslint-disable react/prefer-stateless-function */
export class StaticPlayer extends React.Component {
  render() {
    return (
      <Container>
        <AlbumArt>
          <AlbumCenter />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Amanecer_album_cover.jpg/220px-Amanecer_album_cover.jpg" />
        </AlbumArt>
        <PlayerButtons className="d-flex justify-content-end">
          <PlayerIcon name="backward" size="large" />
          <PlayerIcon name="play" size="large" />
          <PlayerIcon name="forward" size="large" />
        </PlayerButtons>
      </Container>
    );
  }
}

export default StaticPlayer;
