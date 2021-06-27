import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {stateNameList} from '../statenames';

export default function Home() {
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
                    {stateNameList.map(stateName => (
                        <>
                            <li>
                                <Link href="/event-lists/[statename]"
                                      as={`event-lists/${stateName}`}><a>{stateName} Event List</a></Link>
                            </li>
                            <li>
                                <Link href="/event-fliers/[statename]"
                                      as={`event-fliers/${stateName}`}><a>{stateName} Event Fliers</a></Link>
                            </li>
                        </>

                    ))}
                </ul>
            </main>
            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                    </span>
                </a>
            </footer>
        </div>
    );
}
