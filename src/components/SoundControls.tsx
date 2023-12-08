// SoundControls.tsx

import React from 'react';
import Knob from './Knob';

const SoundControls: React.FC<SoundControlsProps> = ({ onChange }) => {
  return (
    <div>
      <div>
        <span>Level</span>
        <Knob value={0.5} onChange={(value) => onChange('level', value)} />
      </div>
      <div>
        <span>Pitch</span>
        <Knob value={0.3} onChange={(value) => onChange('pitch', value)} />
      </div>
      <div>
        <span>Decay</span>
        <Knob value={0.7} onChange={(value) => onChange('decay', value)} />
      </div>
      <div>
        <span>Filter</span>
        <Knob value={0.2} onChange={(value) => onChange('filter', value)} />
      </div>
    </div>
  );
};

export default SoundControls;

