import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NormalUserPage } from './page/NormalUser';
import './App.css';
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@mui/material';
import { useState } from 'react';
import { AutoFixHigh, AutoFixOff, Home } from '@mui/icons-material';
import { HomePage } from './page/Home';
import { ReactQueryUserPage } from './page/ReactQueryUser';

export const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  const [activePage, setActivePage] = useState<string>();

  const routes = [
    {
      name: 'Home',
      path: '/',
      icon: <Home />,
      element: <HomePage />,
    },
    {
      name: 'Normal',
      path: '/normal',
      icon: <AutoFixOff />,
      element: <NormalUserPage />,
    },
    {
      name: 'React Query',
      path: '/react-query',
      icon: <AutoFixHigh />,
      element: <ReactQueryUserPage />,
    },
  ];

  const onPageNavigationChanged = (
    _: React.SyntheticEvent,
    newPage: string
  ) => {
    setActivePage(newPage);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Container sx={{ paddingBottom: '150px' }}>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.name}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Container>

        <div className="app-navigation">
          <BottomNavigation
            showLabels
            sx={{ height: '100px' }}
            value={activePage}
            onChange={onPageNavigationChanged}
          >
            {routes.map(route => (
              <BottomNavigationAction
                key={route.name}
                label={route.name}
                icon={route.icon}
                value={route.path}
                component={Link}
                to={route.path}
              />
            ))}
          </BottomNavigation>
        </div>
      </Router>
    </QueryClientProvider>
  );
};
