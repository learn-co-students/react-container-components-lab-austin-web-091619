import React from 'react'

const Movie = (props)=>{
    return (
        <div className={'review'}>{props.movie.display_title}</div>
    )
}
export default Movie