import PostList from './PostList'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <main className='container mx-auto py-5 flex '>
            <div className='w-4/12'>
                {/* @ts-ignore */}
                <PostList />
            </div>

            <div className='px-5 w-8/12'> {children}</div>
        </main>

    )
}
