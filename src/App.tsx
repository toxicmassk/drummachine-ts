import React, { useState } from 'react';
import DrumPad from './components/DrumPad';
import SoundControls from './components/SoundControls';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Tone from 'tone';
import './css/Knob.css'; // Import Knob styles

const sounds: any[] = [
  { id: 'BassDrum', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'SnareDrum', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'LowTom', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'MidTom', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'HighTom', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'Clap', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'RimShot', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'Closed HiHat', level: 0, pitch: 0, decay: 0, filter: 0 },
  { id: 'Open HiHat', level: 0, pitch: 0, decay: 0, filter: 0 }
  // Add more sounds as needed
];


const App = () => {
  const [masterVolume, setMasterVolume] = useState(0.5); // State for master volume

  // Initialize Tone.js
  Tone.start();

  const handlePlay = (sound: any) => {
    // Play the sound using Tone.js player
    const player = new Tone.Player(`./sounds/${sound.id}.mp3`).toMaster();
    player.volume.value = sound.level * masterVolume; // Adjust the volume based on master volume
    player.start();
  };

  const handleControlChange = (param: string, value: number = 0.5) => {
    // Update the corresponding parameter for all sounds
    // Implement your logic here
    if (param === 'masterVolume') {
      // Your logic for master volume
      // Adjust the overall volume for all sounds using Tone.js
      Tone.Master.volume.value = value;
    }
    // Add logic to handle other parameters (level, pitch, decay, filter)
  };

  return (
    <div>
      <div className="DrumPads">
        {sounds.map((sound: any) => (
          <div key={sound.id}>
            <SoundControls onChange={(param, value) => handleControlChange(param, value)} />
            <DrumPad key={sound.id} sound={sound} onPlay={handlePlay} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
