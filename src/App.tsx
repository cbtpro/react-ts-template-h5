import React from 'react';
import logo from '@/logo.svg';
import '@/App.css';

import { Button, Space } from 'antd-mobile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <Space wrap>
        <Button color='primary' fill='solid'>
          Solid
        </Button>
        <Button color='primary' fill='outline'>
          Outline
        </Button>
        <Button color='primary' fill='none'>
          None
        </Button>
      </Space>
      <Space wrap>
        <Button
          onClick={() => {
            alert('hello.')
          }}
        >
          Default
        </Button>
        <Button color='primary'>Primary</Button>
        <Button color='success'>Success</Button>
        <Button color='danger'>Danger</Button>
        <Button color='warning'>Warning</Button>
      </Space>
    </div>
  );
}

export default App;
