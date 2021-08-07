import {withSSRContext} from 'aws-amplify';

export default async function handler (req, res) {
    console.log('req body', req.body);

    const {Auth} = withSSRContext({req});
    try {
        const { user } = await Auth.signUp({
            username: req.body.email,
            password: req.body.password,
            attributes: {
                email: req.body.email,
                name: req.body.name
            }
        });
        console.log('Ben - SUCCESS Signing Up', user);

        res.status(200).json({'message': `Hello ${JSON.stringify(req.body)}`, status: 200});
    } catch (error) {
        console.log('Ben - error signing up:', error);
    }
}