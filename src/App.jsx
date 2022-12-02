// All your imports should be at the top
// Components
import Header from './components/Header'
import Player from './components/Player';
import Board from './components/Board';

// CSS
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Player whichPlayer="X"/>
        <Player whichPlayer="O"/>
      </div>
      <Board />
    </>
  );
}

export default App;
