import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Movies.js";
import Movie from "./routes/Movie.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
