import React from 'react'
import { getImageURL } from '../utils/img-util'
import './phone-group.css'

export default function PhoneGroup() {
  return (
    <div className='phone-group-list'>
        <div className='phone-frame'>
            <img src={getImageURL('phone-06.png')} alt="phone-01" />
        </div>
        <div className='phone-frame'>
            <img src={getImageURL('phone-07.png')} alt="phone-02" />
        </div>
        <div className='phone-frame'>
            <img src={getImageURL('phone-08.png')} alt="phone-03" />
        </div>
        <div className='phone-frame'>
            <img src={getImageURL('phone-09.png')} alt="phone-04" />
        </div>
        
    </div>
  )
}
