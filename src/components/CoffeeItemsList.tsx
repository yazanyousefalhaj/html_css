import React from 'react'
import { CoffeeItem, CoffeeItemProps } from './coffee_item/CoffeeItem'

interface Props {
  list: CoffeeItemProps[]
}

export const CoffeeItemsList: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map((imageAttrs, i) => (
        <CoffeeItem key={`${imageAttrs.title}-${i}`} {...imageAttrs} />
      ))}
    </>
  )
}
