import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home"
import Error from './pages/Error';
import { PostContainer } from './containers/PostContainer';

function App() {
  return (
    <Router>
      <Link to="/">
        <h1 className='main_heading'>Chatter</h1>
      </Link>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId/:commentId?' element={<PostContainer />} />
        <Route path='/*' element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
