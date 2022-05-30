import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

export const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
