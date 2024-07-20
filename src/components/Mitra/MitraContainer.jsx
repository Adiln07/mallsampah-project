import React from 'react'
import MitraCard from './MitraCard'

const MitraContainer = ({mitras}) => {
  return (
    <div className='py-10 font-redhat text-black'>
        <h1 className='text-center text-4xl font-bold '>Tawaran Program</h1>
        {mitras.map((mitra)=>(
            <MitraCard key={mitra.id} {...mitra} />
        ))}
        
    </div>
  )
}

export default MitraContainer