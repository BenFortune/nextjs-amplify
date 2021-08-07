import {withSSRContext} from "aws-amplify";

function buildBody(targetValues) {
    const {name, email, password} = targetValues;
    console.log('Build Body name', name.value);

    return {
        name: name.value,
        email: email.value,
        password: password.value
    }
}

export default function SignUp() {
    async function signUp(event) {
        event.preventDefault();

        const {name, email, password} = event.target;
        const req = {
            username: email.value,
            password: password.value,
            attributes: {
                email: email.value,
                name: name.value
            }
        };
        // console.log('BEN - payload', JSON.stringify(buildBody(event.target)));
        //
        // await fetch('/api/sign-up', {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(buildBody(event.target))
        // }).then(response => {
        //     response.json().then(res => {
        //         console.log('Res', res);
        //         res.status === 200 ? console.log('success!') : console.log('not success!')
        //     });
        // });

        const {Auth} = withSSRContext({req});

        try {
            console.log('Ben - Call From Component');
            const { user } = await Auth.signUp(req);
            console.log('Ben - SUCCESS Signing Up', user);
        } catch (error) {
            console.log('Ben - error signing up:', error);
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={signUp}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}