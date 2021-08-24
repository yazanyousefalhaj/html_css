import React from 'react'

export const CoffeeItem = ({ imageSrc, altText, title, description, highlight = false }) => {
  const highlightClass = highlight ? 'highlight lg-visible' : ''

  return (
    <div className={`item ${highlightClass}`}>
      <img src={imageSrc} alt={altText} />
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
