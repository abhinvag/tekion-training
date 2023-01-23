import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddComment from './components/AddComment';
import CommentSection from './components/CommentSection';
import data from "./data.json";

function App() {

  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    var comments = localStorage.getItem("comments");
    if(comments == undefined){
      localStorage.setItem("comments", JSON.stringify(data));
    }
    else{
      setComments(JSON.parse(comments))
    }
  }, [])

  const updateComments = (newCommentsArray) => {
    setComments(newCommentsArray)
  } 
  
  return (
    <div className="mainDiv">
      <h1>Tekion Book</h1>
      <img className="mainDiv_image" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-72880,resizemode-1,msid-91945253/industry/services/property-/-cstruction/tech-firm-tekion-leases-over-one-lakh-sqft-office-space-in-bengaluru-in-expansion-bid.jpg"></img>
      <AddComment type="comment" updateComments={updateComments} />
      <CommentSection comments={comments} updateComments={updateComments} />
    </div>
  );
}

export default App;
