import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PortalLayout from './layouts/PortalLayout';
import Projects from './pages/portal/Projects';
import New from './pages/portal/New';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RequireUnauth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return <Navigate to="/portal/projects" replace />;
  }
  return children;
};

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Provider store={store}>
      <Router>
        {!isAuthenticated && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Auth routes */}
          <Route
            path="/login"
            element={
              <RequireUnauth>
                <Login />
              </RequireUnauth>
            }
          />
          <Route
            path="/signup"
            element={
              <RequireUnauth>
                <Signup />
              </RequireUnauth>
            }
          />

          {/* Portal routes */}
          <Route
            path="/portal"
            element={
              <RequireAuth>
                <PortalLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="/portal/projects" replace />} />
            <Route path="projects" element={<Projects />} />
            <Route path="new" element={<New />} />
            <Route path="settings" element={<div>Settings Page (Coming Soon)</div>} />
            <Route path="billing" element={<div>Billing Page (Coming Soon)</div>} />
          </Route>

          {/* Redirects */}
          <Route path="/dashboard" element={<Navigate to="/portal/projects" replace />} />
          
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
