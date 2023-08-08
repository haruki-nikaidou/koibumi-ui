import { createSignal } from 'solid-js';
import koibumiLogo from './assets/koibumi.svg';
import './App.css';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a href="https://github.com/haruki-nikaidou/koibumi-ui" target="_blank">
          <img src={koibumiLogo} class="logo" alt="Koibumi logo" />
        </a>
      </div>
      <h1>Koibumi UI</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Koibumi logo to learn more
      </p>
    </>
  );
}

export default App;
