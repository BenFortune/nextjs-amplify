import {SignOut} from './sign-out';
import {useState} from 'react';
import {Storage} from 'aws-amplify';

export function UploadForm({authenticated}) {
    const [imageFileObj, setImageFileObj] = useState();

    async function uploadEvent(event) {
        event.preventDefault();

        const {date, city, state, flier, files} = event.target;

        console.log('event info', date.value, city.value, state.value, flier.value, imageFileObj);

        try {
            const flierKey = await Storage.put(`/illinois/${imageFileObj.name}`, imageFileObj);

            console.log('Ben - SUCCESS UPLOADING FILE', flierKey);
        } catch (error) {
            console.log('Ben - Error uploading file: ', error);
        }
    }

    return (
        <>
            <h1>Upload Flier</h1>
            <p>{authenticated}</p>
            <form onSubmit={uploadEvent}>
                <label htmlFor="date">Event Date</label>
                <input type="text" name="date"/>
                <label htmlFor="city">Event City</label>
                <input type="text" name="city"/>
                <label htmlFor="state">Event State</label>
                <input type="text" name="state"/>
                <label htmlFor="flier">Event Flier Upload</label>
                <input type="file" name="flier" accept="image/*" onChange={(event) => setImageFileObj(event.target.files[0])}/>
                <label htmlFor="flier">Event Flier Upload</label>
                <button type="submit">Upload Flier</button>
            </form>
            <SignOut />
        </>
    )
}