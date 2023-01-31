import './App.css';
import Gallery from './components/Gallery';
import Post from './components/Post';
import AddPost from './components/AddPost'


function App() {

  return (
    <>
      <h1 className='main_heading'>Tekion Book</h1>
      <div className='wall'>
        <Gallery />
        <Post/>
        <AddPost />
      </div>
    </>
  );
}

export default App;
