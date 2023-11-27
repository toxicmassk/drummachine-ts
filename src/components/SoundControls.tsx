// SoundControls.js
import React from 'react';


const SoundControls = ( props:any ) => {
  return (
    <div>
      <div>
        <span>Level</span>
        <div onChange={(value:any) => props.onChange('level', value)} />
        <div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label htmlFor="volume">Volume</label>
</div>
      </div>
      <div>
        <span>Pitch</span>
        <div onChange={(value:any) => props.onChange('pitch', value)} />
        <div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label htmlFor="volume">Volume</label>
</div>
      </div>
      <div>
        <span>Decay</span>
        <div onChange={(value:any) => props.onChange('decay', value)} />
        <div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label htmlFor="volume">Volume</label>
</div>
      </div>
      <div>
        <span>Filter</span>
        <div onChange={(value:any) => props.onChange('filter', value)} />
        <div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label htmlFor="volume">Volume</label>
</div>
      </div>
      {/* Repeat for other parameters (pitch, decay, lowpass filter) */}
      <div>
        <span>Master Volume</span>
        <div onChange={(value:any) => props.onChange('masterVolume', value)} />
        <div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label htmlFor="volume">Volume</label>
</div>
      </div>
    </div>
  );
};

export default SoundControls;
