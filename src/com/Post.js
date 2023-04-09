import React from 'react'
import PostItem from './Postitem'

export default function Post() {
    const posts = [
        {
            upvote: 547,
            img:"",
            title: " question about the wallet",
            user: "hammer",
            subreddit: "politics",
            comment_count: 284
        }
    ]
    return (
        <div className='posts'>
           {posts.map(post=>(
            <PostItem post={post}/>
           ))}
        </div>
    )
}
