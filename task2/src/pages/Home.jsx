import '../styles/home.css';
import { AddPostContainer } from '../containers/AddPostContainer';
import { GalleryContainer } from '../containers/GalleryContainer';

function App() {

  return (
    <>
      <div className='wall'>
        <div className='galleryContainer'>
          <GalleryContainer />
        </div>
        <div className='addPostContainer'>
          <AddPostContainer />
        </div>
      </div>
    </>
  );
}

export default App;
