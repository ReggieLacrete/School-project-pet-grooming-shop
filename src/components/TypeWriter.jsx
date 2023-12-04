import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'The Best Pet Grooming Shop in Fort Oglethorpe'
      ]}
      wrapper="span"
      speed={-50}
      style={{ fontSize: '1em', display: 'inline-block' }}      
    />
  );
};

export default TypeWriter;