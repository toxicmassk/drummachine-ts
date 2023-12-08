// Knob.tsx
import React from 'react';
import ReactKnob from 'react-knob';

interface KnobProps {
    value: number;
    onChange: (value: number) => void;
}

const Knob: React.FC<KnobProps> = ({ value, onChange }) => {
    return (
        <div style={{ width: '50px', textAlign: 'center', margin: '10px' }}>
            <ReactKnob
                min={0}
                max={1}
                value={value}
                onChange={(v: number) => onChange(v)}
                fgColor="#61dafb"
                bgColor="#282c34"
            />
        </div>
    );
};

export default Knob;
