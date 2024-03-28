"use client"
import ImageCard from '@/components/ImageCard';
import Loading from '@/components/Loading';
import axios from 'axios';
import React from 'react'

const page = () => {
    const [images, setImages] = React.useState(null);

    React.useEffect(() => {
        axios.get('/pic.json').then((response) => {
            setImages(response.data);
        });
    }, [images]);

    if (!images) {
        return <p className='pt-44  text-center text-xl font-boldF'>Loading...</p>
    }
    return (
        <div className='pt-44 grid grid-cols-1 justify-items-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4F'>
            {
                images && images?.map((imageData) => (
                    <ImageCard key={imageData.id} imageData={imageData} />
                ))
            }
        </div>
    )
}

export default page