import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
