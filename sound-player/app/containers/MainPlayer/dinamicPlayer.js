/**
 *
 * MainPlayer
 *
 */

import React from 'react';
import styled from 'styled-components';

const Time = styled.div`
  height: 12px;
  margin-bottom: 3px;
  overflow: hidden;
`;

const Container = styled.div`
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

/* eslint-disable react/prefer-stateless-function */
export class DinamicPlayer extends React.Component {
  render() {
    return (
      <Container>
        <Time />
      </Container>
    );
  }
}

export default DinamicPlayer;
