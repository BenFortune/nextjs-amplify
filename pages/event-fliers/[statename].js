import {dummyData} from '../../dummy-data';
import Image from 'next/image'

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

export async function getServerSideProps(context) {
    const stateName = context.params.statename;

    const eventList = dummyData;

    return {props: {stateName, eventList}}
}