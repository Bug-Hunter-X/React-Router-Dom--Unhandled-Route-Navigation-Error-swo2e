```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>
      <h1>Home</h1>
      <button>Click Me</button>
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>About</h1>
      <button>Click Me</button>
    </div>
  );
}
export default App;
```