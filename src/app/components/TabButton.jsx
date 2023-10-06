import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
const buttonClasses = active ?
' text-white'
: 'text-[#ADB7BE]';

    return (
    <button onClick={selectTab}>
      <p className = {`mr-3 font-semibold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600  to-yellow-600 ${buttonClasses}`}>
      {children}
      </p>
      </button>
  )
}

export default TabButton