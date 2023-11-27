// DrumPad.js
import React from 'react';

const DrumPad = ( props:any ) => {
  const handlePlay = () => {
    // Use Tone.js to play the sound
    props.onPlay(props.sound);
  };

  return (
    <div className="drum-pad" onClick={handlePlay}>
      {props.sound}
    </div>
  );
};

export default DrumPad;
