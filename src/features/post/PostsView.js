import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    },[])
    
    const {isLoading, posts, error} = useSelector((state) => state.posts);
    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {posts && posts.map((post)=>{
                return(
                    <article>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </article>
                )
            })}
            
        </div>
    );
};

export default PostsView;