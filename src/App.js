import './App.css';
import SearchPhotos from './components/searchPhotos';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default App;
