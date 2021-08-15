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

    const eventList = dummyData;
    // TODO: use api call to get event image key
    const imageKey = '/illinois/Chris-Vincent-Vmax-SX.jpg'
    const imageUrl = Storage.get(imageKey)
        .then((result) => {
            console.log('Ben - imageurl', result, imageKey);
        })
        .catch((error) => {
            console.log('Ben - error', error);
        });


    return {
        props: {
            stateName,
            eventList,
        }
    }
}

export default function EventFliers({stateName, eventList}) {
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
                    </section>
                ))}
            </main>
        </>
    );
}