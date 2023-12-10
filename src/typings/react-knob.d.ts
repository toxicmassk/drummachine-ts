declare module 'react-knob' {
    export interface KnobProps {
      // Add any specific props for the Knob component here
      // For example:
      value: number;
      onChange: (value: number) => void;
      // Add other props based on your usage
    }
  
    const Knob: React.FC<KnobProps>;
  
    export default Knob;
  }
  