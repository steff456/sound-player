/**
 *
 * MainPlayer
 *
 */

import React from 'react';

import StaticPlayer from './staticPlayer';
import DinamicPlayer from './dinamicPlayer';

/* eslint-disable react/prefer-stateless-function */
export class MainPlayer extends React.Component {
  render() {
    return (
      <div>
        <DinamicPlayer />
        <StaticPlayer />
      </div>
    );
  }
}

export default MainPlayer;
