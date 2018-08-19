import React from 'react';
import { css } from 'react-emotion';

import { mediaMin, mediaMax } from '@divyanshu013/media';

const objectStyles = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'coral',
  fontSize: '3rem',
  fontFamily: 'Righteous, sans-serif',
  [mediaMin.large]: {
    color: 'mediumseagreen',
  },
  [mediaMax.medium]: {
    color: 'dodgerblue',
    fontSize: '2rem',
  },
});

const paragraphStyles = css`
  ${mediaMax.large} {
    font-size: 1.5rem;
  }
`;

const App = () => (
  <section className={objectStyles}>
    <p>@divyanshu013/media</p>
    <p className={paragraphStyles}>Resize this</p>
  </section>
);

export default App;
