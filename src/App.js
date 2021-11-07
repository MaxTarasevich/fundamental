import React, {useState} from 'react'
import PostList from './components/PostList';

import './styles/App.css'

function App() {

  const [post, setPost] = useState([
  {id: 1, title: `JavaScript`, body: `Description`},
  {id: 2, title: `Python`, body: `Description`},
  {id: 3, title: `Java`, body: `Description`}])

  const [post2, setPost2] = useState([
    {id: 1, title: `Java`, body: `Description`},
    {id: 2, title: `С#`, body: `Description`},
    {id: 3, title: `Go`, body: `Description`}])
  


  return (
    <div className="App">
      <PostList posts={post} title='Список постов 1'/>
      <PostList posts={post2} title='Список постов 2'/>
    </div>
  );
}

export default App;
