import logo from './logo.svg';
import './App.css';
import {Basic,Theme} from 'appi_react_components'

import ExampleShell from "./examples/ExampleShell"

function App({examples}) {  return (
    <Basic>
      <Theme primary='#68d388' secondary='#f43a09'>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{  fontSize: 'calc(10px + 2vmin)'}}>
              Edit <code>src/App.js and examples/*</code> and save to reload.
            </p>
            <img style={{margin:32}} src="appi_nosub.png" alt="logo" />
            <span style={{fontSize:14,margin:16}}>Make sure to run the server: <span style={{color:'#68d388'}}>docker run -p 8099:8099 agardnerut/appi_community</span></span>

            <span style={{fontSize:14,margin:16}}>Note: this is the Composition API, used to build and layout Apps. 
              Use the npm module <span style={{color:'#68d388'}}>appi_react</span> to learn more about the nuts and bolts.</span>

            {examples.map((ex,i)=><ExampleShell key={i} example={ex?.component} code={ex?.code} title={ex?.title} subtitle={ex?.subtitle} />)}
          </header>
        </div>
      </Theme>
    </Basic>
  );
}

export default App;
