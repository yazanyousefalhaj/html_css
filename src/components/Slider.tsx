import React, { useEffect, useState } from "react"
import { ViewMore } from "components/view_more/ViewMore";


export interface Props {
    children: (list: any[]) => React.ReactElement<any>[]
    initList: any[]
}


export const Slider: React.FC<Props> = ({ children, initList }) => {
    const [list, setList] = useState(initList)

    const onViewMoreClicked = () => {
        const newList = [...list]
        newList.push(newList.shift())
        setList(newList)
    }

    useEffect(() => {
        const newList = list.filter((e) => initList.includes(e))
        setList(newList)
    }, [initList])

    return (
        <>
            {children(list)}

            <ViewMore onClick={onViewMoreClicked}/>
        </>
    )
}