import './App.css';
import Header from './components/header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';

function App() {
  const title = "CinemaClub";
  const year = 2026;

  return (
    <main>
      <Header/>
      <MovieList/>
    </main>
  );
}

export default App;