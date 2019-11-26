import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
    state={
        searchTerm:"",
        reviews:[]
    }
    handleTextChange=(event)=>{
        this.setState({
            searchTerm:event.target.value
        })
    }
    handleSearchSubmit=(event)=>{
        event.preventDefault()
        fetch(URL+`&query=${this.state.searchTerm}`)
        .then(resp=>resp.json())
        .then(response=>{
            this.setState({
                reviews:response.results
            })
        })
    }


    render() {
        return (
            <div className={'searchable-movie-reviews'}>
                <form onSubmit={this.handleSearchSubmit}>
                    <input type={"text"} value={this.state.searchTerm} onChange={this.handleTextChange}/>
                    <input type={"submit"} />
                </form>
                {this.state.reviews.length>0 && <MovieReviews reviews={this.state.reviews}/>}
            </div>
        )
    }
}
