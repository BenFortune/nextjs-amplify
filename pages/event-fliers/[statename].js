import {dummyData} from '../../dummy-data';
import Image from 'next/image'
import {stateNameList} from "../../statenames";

export async function getStaticPaths() {
    const paths = stateNameList.map((statename) => ({
        params: { statename },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const stateName = params.statename;

    const eventList = dummyData;

    return {props: {stateName, eventList}}
}

export default function EventFliers({stateName, eventList}) {

    return (
        <>
            <h2>{stateName} Event Fliers</h2>
            <main>
                {eventList.map(event => (
                    <>
                        <section>
                            <Image src={event.picture} alt={event.company} width="250px" height="250px"/>
                        </section>
                    </>
                ))}
            </main>
        </>
    );
}