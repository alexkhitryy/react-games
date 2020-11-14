import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggled, setToggled] = useState(false);
  return (
    <motion.div
      layout
      classname="question"
      onClick={() => setToggled(!toggled)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggled ? children : ""}
      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
