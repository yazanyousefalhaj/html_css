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
        console.log(list);
        return list.map((imageAttrs, i) => {
          return (<CoffeeItem key={`${imageAttrs.title}-${i}-${i===0}`} {...imageAttrs} highlight={i === 0} onSelected={onSelected} />)
        })
      }
      }
    </Slider>
  )
}
