import {Auth} from 'aws-amplify';
import {UploadForm} from '../components/upload-form';
import {SignUp} from '../components/sign-up';

export default function UploadEvent({isUserAuthenticated}) {
    return (
        <>
            <UploadForm authenticated={isUserAuthenticated}/>
            <SignUp />
        </>
    )
}

export async function getServerSideProps({req, res}) {
    try {
        console.log('BEN - Attempting to Authenticate');
        const isUserAuthenticated = await Auth.currentAuthenticatedUser();
        // const userSession = await Auth.currentSession();
        //
        // console.log('USER', userSession)

        console.log('BEN USER AUTHENTICATED', isUserAuthenticated);
        return {
            props: {
                isUserAuthenticated: true
            }
        };
    } catch (e) {
        console.log('User Authenticated Error', e);
        res.writeHead(302, { Location: '/sign-in' })
        res.end();

        // return {
        //     props: {
        //         isUserAuthenticated: true
        //     }
        // }
    }
}