import React from 'react'
import Movie from './Movie'
const MoviewReviews = (props)=>{
    const renderMovies=()=>(
        props.reviews.map(review=><Movie className="movie" movie={review}/>)
    )
    return (
        <div className={'review-list'}>
            movielist
            {props.reviews.map(review=><Movie className="movie" movie={review}/>)}
        </div>
    )
}

export default MoviewReviews