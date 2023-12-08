// SoundControls.tsx

import React from 'react';
import Knob from './Knob';
import '../css/SoundControls.css';

interface SoundControlsProps {
  onChange: (param: string, value: number) => void;
}

const SoundControls: React.FC<SoundControlsProps> = ({ onChange }) => {
  return (
    <div>
      <div>
        <span>Level</span>
        <Knob value={0.5} onChange={(value) => onChange('level', value)} />
      </div>   <div>
        <span>Pitch</span>
        <Knob value={0.5} onChange={(value) => onChange('level', value)} />
      </div>
      <div>
        <span>Decay</span>
        <Knob value={0.5} onChange={(value) => onChange('level', value)} />
      </div>
      <div>
        <span>Filter</span>
        <Knob value={0.5} onChange={(value) => onChange('level', value)} />
      </div>
      {/* Repeat the above block for other parameters (Pitch, Decay, Filter) */}
    </div>
  );
};

export default SoundControls;

