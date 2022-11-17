import React from 'react'
import { notFound } from 'next/navigation';
import { Post } from '../../../typings';

export const dynamicParams = true;

type PageProps = {
    params: {
        postId: string
    }
}

const fetchPostById = async (ID: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`, { next: { revalidate: 60 } });
    const post: Post = await res.json();
    return post
}

const PostDetails = async ({ params: { postId } }: PageProps) => {
    const post = await fetchPostById(postId);
    // console.log('post', post)

    if (!post.id) return notFound()

    return (
        <div className='container mx-auto py-5'>
            <h2 className='text-center font-bold text-xl'>Post Details for post {post.id}</h2>
            <div className='flex justify-center mt-5'>
                {/* details-card  */}
                <div className='shadow w-fit px-10 py-6 bg-slate-200 rounded'>
                    <p className='font-medium mb-2'>Title: {post.title}</p>
                    <p>Description: {post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default PostDetails


export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    return posts.slice(0, 10).map((item) => ({
        postId: item.id.toString(),
    }));
}