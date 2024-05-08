import React from 'react'

function HighlightText({text}) {
  return (
    <span className='bg-gradient-to-b from-[#1FA2FF] via-[#17889c] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
        {" "}
        {text}
    </span>
  )
}

export default HighlightText