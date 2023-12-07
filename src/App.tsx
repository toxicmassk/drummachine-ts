import React, { useState } from 'react';
import DrumPad from './components/DrumPad';
import SoundControls from './components/SoundControls';
import * as Tone from 'tone';

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
  // ... (your existing code)

  // Initialize Tone.js
  Tone.start();

  const handlePlay = (sound: any) => {
    // Play the sound using Tone.js player
    const player = new Tone.Player(`./sounds/${sound.id}.mp3`).toMaster();
    player.volume.value = sound.level; // Adjust this based on your implementation
    player.start();
  };

  const handleControlChange = (param: any, value: any) => {
    // Update the corresponding parameter for all sounds
    // Implement your logic here
  };

  return (
    <div>
      <div>
        {sounds.map((sound: any) => (
          <DrumPad key={sound.id} sound={sound} onPlay={handlePlay} />
        ))}
      </div>
      <SoundControls onChange={handleControlChange} />
    </div>
  );
};

export default App;
