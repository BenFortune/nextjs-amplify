import {withSSRContext} from 'aws-amplify';

export function SignUp() {
    function buildBody(targetValues) {
        const {name, email, password} = targetValues;
        console.log('Build Body name', name.value);

        return {
            name: name.value,
            email: email.value,
            password: password.value
        }
    }

    async function signUp(event) {
        event.preventDefault();

        // const {name, email, password} = event.target;
        console.log('BEN - payload', JSON.stringify(buildBody(event.target)));

       await fetch('/api/sign-up', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buildBody(event.target))
        }).then(response => {
            response.json().then(res => {
                console.log('Res', res);
                res.status === 200 ? console.log('success!') : console.log('not success!')
            });
        });

        event.preventDefault();
        const {name, email, password} = event.target;

        console.log('Sign up data', name.value, email.value, password.value);

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