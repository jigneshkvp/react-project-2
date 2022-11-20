import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <div><p>Welcome to Chakra App!</p></div>
      <Button>Click Me!</Button>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
