import React from 'react'
import { benefitCardList } from '../library/benefit-lib'
import './benefit-card.css'
import { getImageURL } from '../utils/img-util'

export default function BenefitCardList() {
    
  return (
    <div className="benefit-card-list">
        {benefitCardList.map((item, index) => (
            <div key={index} className="benefit-card-item">
                <div className="benefit-card-image" style={{right: item.posRight}}>
                    <img 
                        src={getImageURL(item.photo)} alt={item.photoAlt} 
                        style={{ 
                            height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0 70px 70px 0', scale: 1.1, overflow: 'hidden'
                        }}
                    />
                </div>
                <div className="benefit-card-overlay" style={{ background: item.bgColor }}>
                    <div className="benefit-card-article">
                        <div className="title">{item.title}</div>
                        <hr />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
