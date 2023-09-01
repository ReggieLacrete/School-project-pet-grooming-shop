import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'The Best Pet Grooming Shop in Fort Oglethorpe',
        1000,
        '',
      ]}
      wrapper="span"
      speed={-50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
      
    />
  );
};

export default TypeWriter;