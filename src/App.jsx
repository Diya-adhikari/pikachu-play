import Pikachu from './components/Pikachu';
import Lightning from './components/Lightning';
import GlyphRain from './components/GlyphRain';
import SplashCursor from './components/SplashCursor';
import './App.css';

export default function App() {
  return (
    <div className="app">
      {/* Background effects */}
      <Lightning />
      <GlyphRain />
      <SplashCursor />

      {/* Title text */}
      <h1 className="title">
        ピカチュウ<br />PIKACHU
      </h1>

      {/* Pikachu animation */}
      <Pikachu />

      {/* Instruction text */}
      <p className="instructions">
        MOVE YOUR MOUSE – HE FOLLOWS<br />
        CLICK HIM FOR A GIGGLE
      </p>
    </div>
  );
}



