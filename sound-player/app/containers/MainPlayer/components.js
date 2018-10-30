import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const PlayerIcon = styled(Icon)`
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

export const AlbumArt = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 40px;
  width: 115px;
  height: 115px;
  margin-left: 40px;
  -webkit-transform: rotateZ(0);
  transform: rotateZ(0);
  transition: 0.3s ease all;
  box-shadow: 0 0 0 7px #fff;
  border-radius: 50%;
  overflow: hidden;
  animation: ${props => props.animation};
  @keyframes rotateAlbumArt {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

export const AlbumCenter = styled.div`
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

export const Container = styled.div`
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

export const PlayerButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
`;

export const Time = styled.div`
  height: 8px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: end;
  align-items: end;
  background-color: ${props => props.theme.midGrey};
`;

export const DynamicContainer = styled.div`
  height: 90px;
  position: absolute;
  bottom: ${props => props.bottom};
  width: 90%;
  background-color: ${props => props.theme.darkGrey};
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 1;
  margin: auto;
  left: 0;
  right: 0;
  transition: 0.3s ease-in;
`;

export const SongName = styled.div`
  color: ${props => props.theme.lightGrey};
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 17px;
  font-weight: bold;
`;

export const AlbumName = styled.div`
  color: ${props => props.theme.textColor};
  height: 100%;
  width: 100%;
  font-size: 14px;
`;

export const InfoSong = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  padding: 10px;
  margin-left: 200px;
  flex-direction: column;
`;

export const NumberTrack = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  margin-bottom: 9px;
`;

export const LineTrack = styled.div`
  display: flex;
  width: ${props => props.track};
  background-color: ${props => props.theme.secondaryColor};
  height: 8px;
  transition: width 100ms ease-in-out;
`;
