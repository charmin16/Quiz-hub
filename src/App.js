import './App.css';
import {BrowserRouter as Router, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import Home from './Home';
import Animal from './quizPages/Animal';
import America from './quizPages/America';
import Sports from './quizPages/Sports';
import Europe from './quizPages/Europe';
import GenKno from './quizPages/GenKno';
import Tech from './quizPages/Tech';
import Africa from './quizPages/Africa';

function App() {
  return (
    <div className="App bg-gray-600 w-screen h-[200vh] text-black ">
      {/* <h1 className="text-3xl text-black">QUIZ</h1> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animal' element={<Animal />} />
          <Route path='/america' element={<America />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/europe' element={<Europe />} />
          <Route path='/gen' element={<GenKno />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/africa' element={<Africa />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
