"use client"
import axios from 'axios';
import React from 'react';
import PhotoAlbum from 'react-photo-album';

const Page = ({ params }) => {
    const [images, setImages] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [photo, setPhoto] = React.useState('');


    const toggleModal = (img) => {
        setPhoto(img)
    };
    React.useEffect(() => {
        axios.get('/pic.json')
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    if (error) {
        return <p className='pt-44 text-center text-xl font-bold'>Error: {error.message}</p>;
    }


    const filtered = images?.filter(item => item?.id === parseInt(params?.imageId));
    if (!filtered) {
        return <p className='pt-44 text-center text-xl font-bold'>Loading...</p>;
    }
    return (
        <div className='pt-44 px-8 justify-items-center grid grid-cols-3 md:grid-cols-5 gap-4'>
            {
                filtered && filtered[0].image.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt="Image" onClick={() => {
                            toggleModal(img), setIsOpen(!isOpen);
                        }} />

                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                <div className="max-w-screen-xl overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <button
                                            onClick={() => { setIsOpen(!isOpen) }}
                                            className="absolute top-0 right-0 p-4 text-white"
                                        >
                                            Close
                                        </button>
                                        <img
                                            src={photo}
                                            alt="Full screen image"
                                            className="mx-auto max-w-full max-h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                ))
            }
        </div>
    );
}

export default Page;
