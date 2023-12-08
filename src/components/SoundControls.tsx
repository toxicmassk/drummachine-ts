// SoundControls.tsx

import React from 'react';
import Knob from './Knob';
import './SoundControls.css';

interface SoundControlsProps {
  onChange: (param: string, value: number) => void;
}

const SoundControls: React.FC<SoundControlsProps> = ({ onChange }) => {
  return (
    <div>
      <div>
        <span>Level</span>
        <Knob value={0.5} onChange={(value) => onChange('level', value)} />
      </div>
      {/* Repeat the above block for other parameters (Pitch, Decay, Filter) */}
    </div>
  );
};

export default SoundControls;

