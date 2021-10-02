import {stateNameList, stateNameToAbbreviation} from '../../statenames';
import {listEvents} from '../../src/graphql/queries';
import {API, Storage} from 'aws-amplify';

export async function getStaticPaths() {
    const paths = stateNameList.map((stateName) => ({
        params: { statename: stateName.fullName },
    }));

    return { paths, fallback: false }
}

export async function getStaticProps(req) {
    let flierList = [];
    const {params} = req;
    const stateName = params.statename
    const stateNameAbbreviation = stateNameToAbbreviation[stateName]
    const events = await API.graphql({
        query: listEvents,
        variables: {
            filter: {
                state: {
                    eq: stateNameAbbreviation
                }
            }
        }
    });

    flierList = await Promise.all(events.data.listEvents.items.map(async event => {
        if (!event.image) {
            return event;
        }

        event.imageSrc = await Storage.get(event.image);

        return event;
    }));

    return {
        props: {
            stateName,
            flierList,
        },
        revalidate: 10
    }
}

export default function EventFliers({stateName, flierList}) {
    return (
        <>
            <h2>{stateName} Event Fliers</h2>
            <main>
                {flierList.map(flier => (
                    <section key={flier.name}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={flier.imageSrc} alt={flier.key}/>
                    </section>
                ))}
            </main>
        </>
    );
}