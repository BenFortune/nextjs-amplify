import {Auth} from 'aws-amplify';
import {useRouter} from 'next/router';

export function SignOut() {
    const router = useRouter();

    async function signOut() {
        try {
            await Auth.signOut();

            router.push('/');
        } catch (e) {
            console.log('Error Signing Out')
        }
    }

    return (
        <button type="button" onClick={signOut}>Sign Out</button>
    );
}