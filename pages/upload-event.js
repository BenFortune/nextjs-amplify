import {useEffect, useState} from "react";
import {Auth} from 'aws-amplify';
import {useRouter} from 'next/router';
import {UploadForm} from '../components/upload-form';
import {SignUp} from '../components/sign-up';

export default function UploadEvent({isUserAuthenticated}) {
    const [isAuthenticated, updatedAuthenticatedState] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getAuthenticatedUser = async () => {
            console.log('BEN - Attempting to Authenticate');
            return await Auth.currentAuthenticatedUser();
        }

        getAuthenticatedUser()
            .then((user) => {
                console.log('User is authenticated', user)
                updatedAuthenticatedState(true)
            })
            .catch((error) => {
                console.log('Error Authenticatiing', error)
                router.push('/sign-in');
            })
    }, [])

    return (
        <>
            <UploadForm authenticated={isAuthenticated}/>
            <SignUp />
        </>
    )
}