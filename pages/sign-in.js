import {useState} from 'react';
import {useRouter} from "next/router";
import {Auth} from "aws-amplify";
import Link from "next/link";

export default function SignIn() {
    const router = useRouter();
    const [signInError, showSignInError] = useState(false)


    function forgotPassword() {
        // forgot password functionality here
        return undefined;
    }

    async function signIn(event) {
        event.preventDefault();
        const {username, password} = event.target;

        console.log('Ben - Sign In Data', username.value, password.value);

        try {
            const response = await Auth.signIn(username.value, password.value);

            console.log('Ben - User', response);

            router.push('/');
        } catch (e) {
            console.log('Ben - Error', e);
            showSignInError(true);
        }
    }

    return (
        <>
            <h1>Sign In</h1>
            {signInError ? <div>Sign In Error</div> : null}
            <form onSubmit={signIn}>
                <label htmlFor="username">Username (email address)</label>
                <input type="email" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
                <button type="submit">Sign In</button>
            </form>
            <button type={"button"} onClick={forgotPassword()}>Forgot Password</button>
        </>
    )
}