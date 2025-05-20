// Import React Router components for navigation
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// Import custom components for data entry and dashboard
import CompanyForm from './components/CompanyForm';
import Dashboard from './components/Dashboard';

// Main App component that sets up the application structure
function App() {
  return (
    // BrowserRouter enables client-side routing for the app
    <BrowserRouter>
      {/* Navigation bar with links to different pages */}
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        {/* Link to the data entry page */}
        <Link to="/entry" style={{ marginRight: '10px' }}>Data Entry</Link>
        {/* Link to the dashboard page */}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      {/* Routes define which component to render based on the URL */}
      <Routes>
        {/* Route for /entry renders the CompanyForm component */}
        <Route path="/entry" element={<CompanyForm />} />
        {/* Route for /dashboard renders the Dashboard component */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;