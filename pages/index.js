import Head from 'next/head'
import Link from 'next/link'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
import styles from '../styles/Home.module.css'
import {stateNameToAbbreviation} from '../statenames';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export default function Home() {
// function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nextjs Amplify</title>
                <meta name="description" content="Setting up Nextjs with AWS Amplify"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1>Nextjs React Amplify</h1>
                <p>Testing this out for Ricks List site conversion</p>
                <ul className="state-links">
                    {Object.keys(stateNameToAbbreviation).map((stateName) => (
                        <section key={stateName}>
                            <li>
                                <Link href="/event-lists/[stateName]"
                                      as={`/event-lists/${stateName}`} ><a>{stateName} Event List</a></Link>
                            </li>
                            <li>
                                <Link href="/event-fliers/[statename]"
                                      as={`/event-fliers/${stateName}`}><a>{stateName} Event Fliers</a></Link>
                            </li>
                        </section>
                    ))}
                    <li>
                        <Link href={"/event-lists-files/C-IOWA-RICKS-LIST-2021.pdf"}><a>PDF</a></Link>
                    </li>
                    <li>
                        <Link href={"/sign-up"}><a>Sign Up</a></Link>
                    </li>
                    <li>
                        <Link href={"/upload-event"}><a>Upload Event</a></Link>
                    </li>
                </ul>
                {/*<AmplifySignOut />*/}
            </main>
            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    Powered by{' '}
                    <span className={styles.logo}>
                        {/* Image component is not supported in Amplify currently - reenable once supported*/}
                        {/*<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>*/}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                    </span>
                </a>
            </footer>
        </div>
    );
}

// export default withAuthenticator(Home);
