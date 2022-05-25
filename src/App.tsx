import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>Welcome!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Normal Fetching</Link>
          </li>
          <li>
            <Link to="/users">React Query</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/normal">Normal</Route>
        <Route path="/react-query">React Query</Route>
      </Routes>
    </Router>
  );
}

export default App;
