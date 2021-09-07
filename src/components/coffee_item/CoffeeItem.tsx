import React from 'react'
import './CoffeeItem.css'

export interface CoffeeItemProps {
  id: number
  imageSrc: string
  altText: string
  title: string
  description: string
  highlight?: boolean
  onSelected: (id: number) => void
}

export const CoffeeItem: React.FC<CoffeeItemProps> = ({ id, imageSrc, altText, title, description, onSelected, highlight = false }) => {
  const highlightClass = highlight ? 'highlight lg-visible' : ''

  return (
    <div className={`item ${highlightClass}`}>
      <img src={imageSrc} alt={altText} />
      <input type="checkbox" name="selectItem" onClick={() => onSelected(id)} />
      <div className='card'>
        <h3>{title}</h3>
        <p>{description}</p>

        {highlight && (
          <div className='tags d-flex justify-content-space-between m-auto'>
            <span>1 Bag</span>
            <span>$69.99</span>
          </div>
        )}
      </div>
    </div>
  )
}
