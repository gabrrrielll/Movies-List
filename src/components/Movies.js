import React, { Component } from 'react';
import {getMovies} from '../services/fakeMoviesService';



class Movies extends Component {
    state = {
        movies: getMovies(),
        isLIked: false
    }
    handleDelete(movie){
    
        const xmovies = this.state.movies.filter( m => m._id !== movie._id );
        this.setState({ movies: xmovies })
    }
    handleLike(movie){
        console.log(`like ${movie.title}`);
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Fav</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>{
                            return(
                                <tr key = {movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <i className="fa fa-heart-o"
                                        onClick={()=>this.handleLike(movie)}></i>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm"
                                        onClick={()=>this.handleDelete(movie)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })}
                        
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Movies;