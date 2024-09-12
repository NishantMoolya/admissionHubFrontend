import React from 'react'

const FormButton = ({ text,type,icon=null,color='bg-sky-500',handleClick=() => {},disabled=false}) => {
  return (
    <input type={type} value={text} onClick={handleClick} disabled={disabled} className={`py-1 px-3 ${color === 'bg-sky-500'?'bg-sky-500':color} text-white font-semibold text-base shadow rounded capitalize ${color === 'bg-sky-500'?'hover:bg-sky-600':'hover:bg-red-600'}`} />
  )
}

export default FormButton