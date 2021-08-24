import React from 'react'
import { CoffeeItem } from './CoffeeItem'

export const CoffeeItemsList = ({ list }) => {
  return (
    <>
      {list.map((imageAttrs) => (
        <CoffeeItem {...imageAttrs} />
      ))}
    </>
  )
}
