import React from 'react'
import { CoffeeItem, CoffeeItemProps } from './coffee_item/CoffeeItem'
import { Slider } from './Slider'

interface Props {
  list: CoffeeItemProps[]
  onSelected: (id: number) => void
}

export const CoffeeItemsList: React.FC<Props> = ({ list, onSelected }) => {

  return (
    <Slider initList={list}>
      {(list) => {
        return list.map((imageAttrs, i) => (
          <CoffeeItem key={`${imageAttrs.title}-${i}`} {...imageAttrs} highlight={i === 0} onSelected={onSelected} />
        ))
      }
      }
    </Slider>
  )
}
