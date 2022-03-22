import BackgroundBack from './components/background-back';
import PasswordGates from './components/password-gates';
import OverlayBackground from './components/overlay-background';
import MainTriad from './components/main-triad';
import './components/index.css';



function App() {
  return (
    <div className="App">
      <BackgroundBack />
      <PasswordGates />
      <OverlayBackground />
      <MainTriad />
    </div>
  );
}

export default App;
