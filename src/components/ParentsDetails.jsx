import React from 'react'

const DetailPara = ({ field, value }) => {
    return (<div className='flex items-center gap-1'>
      <p className='font-semibold capitalize text-lg'>{field}:</p>
      <p className='capitalize text-lg'>{value}</p>
    </div>)
  }
  
const ParentsDetails = () => {
  return (
    <div className='flex flex-col gap-2'>
        <DetailPara field={'Father name'} value={'name'} />
        <hr />
        <DetailPara field={'Mother name'} value={'name'} />
        <hr />
        <DetailPara field={'Father Phone'} value={'Phone'} />
        <hr />
        <DetailPara field={'Mother Phone'} value={'Phone'} />
        <hr />
        <DetailPara field={'Father Occupation'} value={'Occupation'} />
        <hr />
        <DetailPara field={'Mother Occupation'} value={'Occupation'} />
        <hr />
        <DetailPara field={"Student's religion"} value={'religion'} />
        <hr />
        <DetailPara field={"Student's caste"} value={'caste'} />
        <hr />
    </div>
  )
}

export default ParentsDetails