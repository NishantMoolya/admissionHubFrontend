import React from 'react'

const DetailPara = ({ field, value }) => {
    return (<div className='flex items-center gap-1'>
      <p className='font-semibold capitalize text-lg'>{field}:</p>
      <p className='capitalize text-lg'>{value}</p>
    </div>)
  }

const SchoolDetails = () => {
  return (
    <div className='flex flex-col gap-2'>
        <DetailPara field={'School name'} value={'name'} />
        <hr />
        <DetailPara field={'Current class'} value={'5'} />
        <hr />
        <DetailPara field={'Admission number'} value={'1215498479'} />
        <hr />
        <DetailPara field={'Specially abled kid'} value={'No'} />
        <hr />
    </div>
  )
}

export default SchoolDetails