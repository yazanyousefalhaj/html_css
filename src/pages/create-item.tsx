import React, { useState, FormEventHandler, ChangeEventHandler } from "react"
import { useHistory } from "react-router-dom"


export const CreateItemPage: React.FC = () => {
    const [formState, setFromState] = useState({})
    const history = useHistory()
    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        const oldList = JSON.parse(localStorage.getItem("images") as string)
        const newList = [...oldList, formState]
        localStorage.setItem("images", JSON.stringify(newList))
        history.replace("/")
    }

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setFromState({
            ...formState,
            [(e.target).name]: e.target.value
        })
    }

    return (
        <div>
            <h1>Add new items</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="imageSrc">Image Source: </label>
                    <input type="text" name="imageSrc" id="imageSrc" onChange={onChange} />
                </div>

                <div>
                    <label htmlFor="altText">Alt Text: </label>
                    <input type="text" name="altText" id="altText"  onChange={onChange}/>
                </div>

                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" onChange={onChange}/>
                </div>

                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" id="description" onChange={onChange}/>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}