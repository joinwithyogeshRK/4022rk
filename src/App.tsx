import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Experience from '@/pages/Experience';
import Contact from '@/pages/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
