import React, { useRef } from 'react';
import '../css/DrumPad.css'

const DrumPad = (props: any) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    // Programmatically play the audio from the public folder
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="drum-pad" onClick={handlePlay}>
      {props.sound.id}
      <audio ref={audioRef} src={`./sounds/${props.sound.id}.wav`} />
    </div>
  );
};

export default DrumPad;


