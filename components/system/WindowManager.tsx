import { ProcessConsumer } from 'contexts/process';
import dynamic from 'next/dynamic';
import type { FC } from 'react';

const Window = dynamic(import('components/system/Window'));

const WindowManager: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component, hasWindow }]) =>
        hasWindow ? (
          <Window key={id} id={id}>
            <Component />
          </Window>
        ) : (
          <Component key={id} id={id} />
        )
      )
    }
  </ProcessConsumer>
);

export default WindowManager;
