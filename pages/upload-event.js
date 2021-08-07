import {Auth, withSSRContext} from 'aws-amplify';
import {UploadForm} from '../components/upload-form';
import {SignUp} from '../components/sign-up';

export default function UploadEvent({isAuthenticated}) {
    return (
        <>
            <UploadForm authenticated={isAuthenticated}/>
            <SignUp />
        </>
    )
}

export async function getServerSideProps({req, res}) {
    const {Auth} = withSSRContext({req})

    try {
        console.log('BEN - Attempting to Authenticate');
        const isUserAuthenticated = await Auth.currentAuthenticatedUser();

        console.log('BEN USER AUTHENTICATED', isUserAuthenticated);
        return {
            props: {
                isUserAuthenticated: true
            }
        }
    } catch (e) {
        console.log('Error', e);
        return {
            props: {
                isUserAuthenticated: false
            }
        }
        res.writeHead(302, { Location: '/sign-in' })
        res.end()
    }
}