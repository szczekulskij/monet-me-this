import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  z-index: -10;
`;

class PlainBackground extends React.Component {
  render() {
    return <Background />;
  }
}

export default PlainBackground;