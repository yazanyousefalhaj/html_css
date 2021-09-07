import React from 'react'
import './ViewMore.css'

export interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export const ViewMore: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='view-more card' onClick={onClick}>
      <img src='assets/images/image 2.png' alt='View more' />
      <h3>View More</h3>
    </div>
  )
}
