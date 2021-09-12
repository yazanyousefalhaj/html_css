import React, { useEffect, useState } from "react"
import { ViewMore } from "components/view_more/ViewMore";


export interface Props {
    children: (list: any[]) => React.ReactElement<any>[];
    initList: any[];
}


export const Slider: React.FC<Props> = ({ children, initList }) => {
    const [index, setIndex] = useState(0);

    const onViewMoreClicked = () => { setIndex(index + 1) };

    const mod = index % initList.length;
    const list = [...initList.slice(mod), ...initList.slice(0, mod)];

    return (
        <>
            {children(list)}

            <ViewMore onClick={onViewMoreClicked}/>
        </>
    )
}