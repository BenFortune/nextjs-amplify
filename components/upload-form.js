import {SignOut} from './sign-out';
import {useState} from 'react';

function uploadEvent(imageFileObject) {
    return (event) => {
        event.preventDefault();

        const {date, city, state, flier, files} = event.target;

        console.log('event info', date.value, city.value, state.value, flier.value, imageFileObject);
    }

}

export function UploadForm({authenticated}) {
    const [imageFileObj, setImageFileObj] = useState();

    return (
        <>
            <h1>Upload Flier</h1>
            <p>{authenticated}</p>
            <form onSubmit={uploadEvent(imageFileObj)}>
                <label htmlFor="date">Event Date</label>
                <input type="text" name="date"/>
                <label htmlFor="city">Event City</label>
                <input type="text" name="city"/>
                <label htmlFor="state">Event State</label>
                <input type="text" name="state"/>
                <label htmlFor="flier">Event Flier Upload</label>
                <input type="file" name="flier" accept="image/*" onChange={(event) => setImageFileObj(event.target.files[0])}/>
                <button type="submit">Upload Flier</button>
            </form>
            <SignOut />
        </>
    )
}