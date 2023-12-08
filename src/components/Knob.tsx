// Knob.tsx
import React from 'react';
import ReactKnob from 'react-knob';
import '../css/Knob.css'; // Update the path to the CSS file
import DialImage from 'dial.jpeg';  // Assuming this is how you import the image

interface KnobProps {
    value: number;
    onChange: (value: number) => void;
}
const Knob: React.FC<KnobProps> = (props) => {
    return (
        <div className="Knob">
            <div className="Knob-label">
                <input type="number" />
            </div>
            <ReactKnob
                // ... other props
                img={dialImage} // Update this line
            />
        </div>
    );
};

export default Knob;
