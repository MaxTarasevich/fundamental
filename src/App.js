import React, {useState} from 'react'
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';

import './styles/App.css';

function App() {

  const [post, setPost] = useState([
  {id: 1, title: `JavaScript`, body: `Description`},
  {id: 2, title: `Python`, body: `Description`},
  {id: 3, title: `Java`, body: `Description`}])

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={post} title='Список постов 1'/>
     
    </div>
  );
}

export default App;
