import React from 'react'
import './result.scss'
import BusResultBox from './BusResultBox';

function Result() {
  return (
    <section className='Filter_result'>
        <h1>Search For : Latur To Mumbai</h1>
        <div className='Bus_result_boxes'>
        <BusResultBox/>
        </div>

    </section>
  )
}

export default Result