import {Storage} from 'aws-amplify';
import {useEffect, useState} from 'react';

export default function Fliers() {
    const [imageKey, setImageKey] = useState();
    const [imageURL, setImageUrl] = useState();
    useEffect(() => {
        Storage.list('') // for listing ALL files without prefix, pass '' instead
            .then(result => {
                setImageKey(result[0].key);
                Storage.get(result[0].key)
                    .then(result => {
                        setImageUrl(result);
                    })
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
            <div>Image Key {imageKey}</div>
            <div>Image Url {imageURL}</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageURL} alt=""/>
        </div>
    )
}



