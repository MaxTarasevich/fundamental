import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts, title}) {
    return (
        <div>
             <h1 style={{textAlign:'center', color:'red', margin:'20px'}}>{title}:</h1>
     {posts.map((i)=>{
       return <PostItem post={i} key={i.id}/>
     })}

        </div>
    )
}

