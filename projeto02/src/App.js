import { useState, useEffect, useRef} from 'react'
import './App.css';
import { motion } from 'framer-motion'
import image1 from '../src/img/image01.jpg'
import image2 from '../src/img/image02.jpg'
import image3 from '../src/img/image03.jpg'
import image4 from '../src/img/image04.jpg'
import image5 from '../src/img/image05.jpg'

const images = [image1 , image2, image3 ,image4 ,image5]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)
  useEffect(() =>{
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])


  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
        <motion.div className="inner" drag="x" dragConstraints={{right:0, left: -width}} initial={{x: 100}} animate={{x:0}} transition={{duration:0.8}}>

        {images.map(image =>(
          <motion.div className="item" key={image}>
            <img src={image}/>
          </motion.div>
        ))}


        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
