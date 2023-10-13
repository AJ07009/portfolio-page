import React from 'react'
import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "cal(100% - 0.75rem"},
}
const TabButton = ({ active, selectTab, children}) => {
const buttonClasses = active ?
' text-white'
: 'text-[#ADB7BE]';

    return (
    <button onClick={selectTab}>
      <p className = {`mr-3 font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-yellow-600 ${buttonClasses}`}>
      {children}
      </p>
      <motion.div
      animate = {active ? "active" : "default"}
      variants = {variants}
      className = "h-1 bg-pink-400 mt-2 mr-3" >
      </motion.div>
    </button>
  )
}

export default TabButton