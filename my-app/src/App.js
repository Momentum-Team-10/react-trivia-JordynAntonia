import { useState } from "react"
import Category from "./components/Category.js"
import { categoryData } from "./categoryData"

export const App = () => {
    const [categories, setCategories] = useState(categoryData)}

    const handleCategory = (name) => {
        const newCategory = categories.map((category) => {
            if(category.name === name) {
                const selected = !category.selected
                return {...category, selected}
            
            }
            return question
        
        })
        setCategories(newQuestions)


    return (
        <>
            <h1>Open Trivia Game</h1>
            <h2>Select a Category</h2>
            {categories.map((category, index, handleCategory) => (
                <Category
                id={category.id}
                name={category.name}
                key={index}
                handleCategory={handleCategory}
                />

            ))}
        </>
    )
}
    
export {App as default}

