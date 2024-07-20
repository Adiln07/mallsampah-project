import React from 'react'
import SolusiCard from './SolusiCard'
import { useParams } from 'react-router-dom'


const SoluciContent = ({solusis}) => {

    const {id} = useParams();

    return (
    <div className='py-10 font-redhat text-black'>
        <h1 className='text-center text-4xl font-bold '>Tawaran Program</h1>
        {solusis[id].data.map((solusi, index)=>(
            <SolusiCard key={index} {...solusi} />
        ))}
    </div>
  )
}

export default SoluciContent