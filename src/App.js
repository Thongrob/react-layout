import {Route ,Routes} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';

function App() {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Service" element={<Service />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
