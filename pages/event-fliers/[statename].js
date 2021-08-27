import {dummyData} from '../../dummy-data';
import {stateNameList} from '../../statenames';
import {Storage} from 'aws-amplify';
import {useEffect, useState} from 'react';

export async function getStaticPaths() {
    const paths = stateNameList.map((statename) => ({
        params: { statename },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps(req) {
    const {params} = req;
    const stateName = params.statename;
    let imageUrl;

    const eventList = dummyData;
    // TODO: use api call to get event image key
    const imageKey = '/illinois/Chris-Vincent-Vmax-SX.jpg'
    // const imageKey = '/iowa/C:\\fakepath\\APR-ST-CHARLES-MO.jpg'
    await Storage.get(imageKey)
        .then((result) => {
            console.log('Ben - imageurl', result, imageKey);
            imageUrl = result;
        })
        .catch((error) => {
            console.log('Ben - error', error);
        });
    console.log('image url', imageUrl)

    return {
        props: {
            stateName,
            eventList,
            imageUrl
        },
        revalidate: 10
    }
}

export default function EventFliers({stateName, eventList, imageUrl}) {
    const [flierList, setFlierList] = useState([])
    useEffect( () => {
        const fliers = async () => {
            return await Storage.list('')
                .then((results) => {
                    console.log('results', results);
                    setFlierList(results);
                })
                .catch((error) => {
                    console.log('Ben - error', error);
                });
        }
        fliers()

    }, []);
    return (
        <>
            <h2>{stateName} Event Fliers</h2>
            <main>
                {flierList.map(flier => (
                    <section key={flier.key}>
                        <div>{flier.key}</div>
                        <div>{flier.eTag}</div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imageUrl} alt={flier.key}/>
                    </section>
                ))}
            </main>
        </>
    );
}