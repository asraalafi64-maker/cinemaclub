import './App.css';
import Footer from './components/Footer';
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
      <Footer/>
    </main>
  );
}

export default App;