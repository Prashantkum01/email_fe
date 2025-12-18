import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar appears on every page */}
        <Navbar />

        {/* Routes / Pages */}
        <div className="flex-1">
          <AppRoutes />
        </div>

        {/* Footer appears on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
