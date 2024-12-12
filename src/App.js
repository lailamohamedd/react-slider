import './App.css';
import { motion } from 'framer-motion';
import Images from './Images';
import { useEffect, useRef, useState } from 'react';

function App() {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  }, []);
  return (
    <div className='container'>
      <motion.div ref={carouselRef} className='carousel'>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {Images.map((Image) => (
            <motion.div className='item' key={Image}>
              <img src={Image} alt='carousel-image' />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
