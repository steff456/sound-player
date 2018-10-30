/**
 *
 * MainPlayer
 *
 */

import React from 'react';

import StaticPlayer from './staticPlayer';

/* eslint-disable react/prefer-stateless-function */
export class MainPlayer extends React.Component {
  render() {
    return (
      <div>
        <StaticPlayer />
      </div>
    );
  }
}

export default MainPlayer;
