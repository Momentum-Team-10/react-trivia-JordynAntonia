import {useEffect, useState} from 'react'
import axois from 'axios'

export default function Category (props) {
    const {name, selected, questions} = props
    const [expanded, setExpanded] = useState(false)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        console.log('***USE EFECT RUNS***')
        // installed axios promise
        axois
            .get(
                'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
            )
            .then((response) => {
            })
    }, [])


    return (
        // displays category button with the clicked effect 
        <div className="category">
            <p>{name}</p>
            <button className="category-btn" onClick={() => Category(name)}>
                {selected ? 'yes' : 'no'}
            </button>
    
        

        {expanded ? (
            <div>
            <button
                className="btn controls"
                onClick={() => setExpanded(false)}
            >
            Hide list of questions 
            </button>
            
            <ul>
                {questions.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    ) : (
        <button className="btn controls" onClick={() => setExpanded(true)}>
            Show list of questions 
        </button>
    )}
        
    <ul className="repos">
        {repos.map((repo, index) => (
            <li className="repo" key={index}>
                {repo}
            </li>
        ))}
    </ul>
</div>
    )
}