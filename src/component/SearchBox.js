import React from 'react';
const SearchBox=({onHandleChange})=>{
    return(
        <div className="search">
            <input onChange={(event)=>onHandleChange(event.target.value) }type="text" placeholder="Type to get ideas" className="input"/>
        </div>
    )
}
export default SearchBox