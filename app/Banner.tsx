import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="py-10 bg-[url('/images/banner-bg.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="container mx-auto">
                <h1 className='text-center text-slate-700 text-2xl font-bold mb-2'>Hello NoBig</h1>
                <h1 className='text-center text-slate-700 text-lg font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed ea quisquam in placeat itaque quibusdam id excepturi nobis? Illo.</h1>
            </div>
        </div>
    )
}

export default Banner