import React from 'react'
import { functionCardList } from '../library/function-lib'
import './function-card.css'
import { getImageURL } from '../utils/img-util'

export default function FunctionCardList() {
  return (
    <div className="function-card-list">
        {functionCardList.map((item, index) => (
            <div key={index} className="function-card-item">
                <div className="function-card-image">
                    <img 
                        src={getImageURL(item.image)} alt={item.imgAlt}
                        style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '70px'}}
                    />
                </div>
                <div className="function-card-overlay">
                    <div className="icon">
                        <img src={getImageURL(item.icon)} alt={item.iconAlt} />
                    </div>
                    <div className="title">{item.title}</div>
                    <hr />
                </div>
            </div>
        ))}
    </div>
  )
}
