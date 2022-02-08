import React from "react";
import SingleStroy from "./SingleStroy";
import "./Story.css";
import { motion } from "framer-motion";
import {
  useState,
  useEffect,
  useRef,
} from "react";

function Story() {
  const [width, setWidth] = useState(0);
  const storyRef = useRef();

  useEffect(() => {
    setWidth(
      storyRef.current.scrollWidth -
        storyRef.current.offsetWidth
    );
  }, []);

  return (
    <motion.div className='story' ref={storyRef}>
      <motion.div
        drag='x'
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        className='story__container'
      >
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
        <SingleStroy />
      </motion.div>
    </motion.div>
  );
}

export default Story;
