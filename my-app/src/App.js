import { useState } from "react"
import Category from "./components/Category.js"
import { categoryData } from "./categoryData"

export const App = () => {
    const [categories] = useState(categoryData)    
    

        return (
        <>
            <h1>Trivia Game</h1>
            <h2>Select a Category</h2>
                    {categories.map((category, index) => (
                        <Category
                            id={category.id}
                            name={category.name}
                            key={index}
                            // question={category.question}
                            // answer={category.answer}    

                        />
            ))}
                
            
        </>
    )
}

export {App as default}

