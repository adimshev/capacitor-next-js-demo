import React from 'react';
import { Navigation } from 'components';

export default function Page ({ pathname })
{
  return (
    <div>
      <h1 style={{ margin: 20 }}>{ pathname }</h1>
      <Navigation />
    </div>
  );
}

Page.getInitialProps = ({ pathname }) => ({ pathname });
