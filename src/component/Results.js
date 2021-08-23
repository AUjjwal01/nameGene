import React from 'react'
import NameCard from './NameCard'

const Results=  ({suggestions})  =>{
    const suggestedNames=suggestions.map(e=>{
        return <NameCard key={e} suggestion={e} />
    })
return(
    <div className="container">
        {suggestedNames}
    </div>
)

}
export default Results