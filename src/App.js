import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
