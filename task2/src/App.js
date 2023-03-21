import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import Error from './pages/Error';
import { PostContainer } from './containers/PostContainer';
import {Link} from "react-router-dom"


function App() {

  return (
    <Router>
      <Link to="/">
        <h1 className='main_heading'>Chatter</h1>
      </Link>
      <Routes >
        <Route path='/' exact element={<Home />} />
        <Route path='/post/:postId/:commentId?' element={<PostContainer />} />
        <Route path='/*' element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;
