import Link from 'next/link';
import React from 'react'
import { Post } from '../../typings';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();
    return posts
}

const PostList = async () => {
    const posts = await fetchPosts();
    // console.log('posts', posts[0])
    return (
        <div>
            <h3 className='font-medium text-lg'>Posts List</h3>
            <div>
                {posts.slice(0, 10).map((post: Post, index: number) => (
                    <Link key={index} href={`/post-bar/${post.id}`}>
                        <p className='py-2 font-semibold hover:text-slate-500'>Post: {post.id}. {post.title}</p>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default PostList