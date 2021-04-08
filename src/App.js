import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

import { movies$ } from './Utils/movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [numberOfPage, setNumberOfPage] = useState(0);

  useEffect(() => {
    movies$
      .then((data) => {
        setMovies(data);
        setCategories([
          ...new Set(data.map((entry) => entry.category)).values(),
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    console.log(`${id}`);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const onChangeHandler = (values) => {
    setSelectedCategories(values);
  };

  let btnPagination = [];

  if (movies) {
    const end = movies.length / 3;
    for (let i = 1; i <= end; i++) {
      btnPagination.push(
        <button
          key={i}
          selectedPage={numberOfPage === i}
          onClick={() => {
            setNumberOfPage(i);
          }}
        >
          {i}
        </button>
      );
    }
  }

  const filterMovie = (movie) => {
    return movie.id < numberOfPage * 3;
  };

  return (
    <div className="image">
      <div className="container">
        <div className="row  flex-container">
          {movies
            .filter((movie) => {
              return filterMovie(movie);
            })
            .map((movie) => {
              return (
                <div className="col">
                  <Card
                    onDelete={() => deleteHandler(movie.id)}
                    key={movie.id}
                    {...movie}
                    like={movie.likes}
                    dislike={movie.dislikes}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div>
        Nombre de film :
        <span className="badge badge-success">{movies.length - 1}</span>
      </div>
      <div>{btnPagination}</div>
      <div></div>
    </div>
  );
}

export default App;
