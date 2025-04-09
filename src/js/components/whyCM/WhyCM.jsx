import React from 'react'

import '../../../css/components/whyCM/whyCM.css'
import { whyCMData } from '../../data/whyCMData'

const WhyCM = () => {
  return (
    <div className="whycm-outer-container">
      <div className="whycm-components-outer-container">
        <div className="whycm-container">
          <div className="whycm-top" data-aos="fade-up">
           
          </div>
          <div className="whycm-bottom">
            {whyCMData.map((item) => {
              const { id, title, image } = item
              return (
                <div className="whycm-card" key={id} data-aos="fade-up">
                  <img src={image} alt
                    ={title} />
                  <span>{title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyCM