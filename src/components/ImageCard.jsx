import Link from 'next/link'
import React from 'react'

const ImageCard = ({ imageData }) => {

    const { id, name, image } = imageData

    return (


        <Link href={`/gallery/${id}`} className="card hover:scale-105 transition-all duration-300   card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[400px] h-[200px] object-cover' src={image[0]} alt="Shoes" /></figure>
            <div className=" p-2 text-center">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{image.length} images</p>
            </div>
        </Link>

    )
}

export default ImageCard