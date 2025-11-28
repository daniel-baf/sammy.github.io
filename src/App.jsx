import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import theme from './theme/theme';
import Home from './views/Home/Home';
import Year2023 from './views/Year2023/Year2023';
import Year2025 from './views/Year2025/Year2025';
import Year2026 from './views/Year2026/Year2026';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/2023" element={<Year2023 />} />
        <Route path="/2025" element={<Year2025 />} />
        <Route path="/2026" element={<Year2026 />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
