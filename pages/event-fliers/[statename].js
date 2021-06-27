import {dummyData} from '../../dummy-data';
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
                            {/* Image component is not supported in Amplify currently - reenable once supported*/}
                            {/*<Image src={event.picture} alt={event.company} width="250px" height="250px"/>*/}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={event.picture} alt={event.company} width="250px" height="250px"/>
                        </section>
                    </>
                ))}
            </main>
        </>
    );
}