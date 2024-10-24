import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo h-1/2 w-1/2" alt="logo" />
        <p className='font-bold text-5xl'>
          Edit <code className='font-bold text-5xl'>Aguante Tailwind</code>
        </p>
        <a
          className='font-bold text-5xl'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
