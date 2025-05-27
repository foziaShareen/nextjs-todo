"use client"
import { useState, useEffect } from 'react';



export default function Posts() {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        async function fetchPosts(){
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json()
            setPosts(data);
            
                console.log(data)
            }
            fetchPosts()},[]);
            return(
                <div className='posts-container'>
                
                                {posts.map((post)=>{
                                    return(
                                        <div key={post.id} className='post-card'>
                                            <h2>{post.title}</h2>
                                            <p>{post.body}</p>
                                        </div>
                                    )
                                })}
                                </div>
                            )
                }
