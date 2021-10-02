import {stateNameList, stateNameToAbbreviation} from "../../statenames";
import {listEvents} from '../../src/graphql/queries';
import {API} from 'aws-amplify';

export async function getStaticPaths() {
    const paths = stateNameList.map((stateName) => ({
        params: { statename: stateName.fullName },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let eventList = [];
    const stateName = params.statename
    const stateNameAbbreviation = stateNameToAbbreviation[stateName];

    try {
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

        eventList = events.data.listEvents.items;

        console.log('Ben - event list success', eventList);
    } catch (e) {
        console.log('Ben - event list error', JSON.stringify(e));
    }

    return {
        props: {
            stateName,
            eventList
        },
        revalidate: 10
    }
}

function renderEventList(eventList) {
    if (!eventList || !eventList.length) {
        return(<div>No Events To Show</div>)
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Event Name</th>
                <th>Event Time</th>
                <th>Event Address</th>
                <th>Event City</th>
                <th>Event State</th>
                <th>Contact</th>
                <th>Memo</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {eventList.map((event) => (
                <tr key={event.name}>
                    <td>{event.date}</td>
                    <td>{event.name}</td>
                    <td>{event.time}</td>
                    <td>{event.address}</td>
                    <td>{event.city}</td>
                    <td>{event.state}</td>
                    <td>{event.contact}</td>
                    <td>{event.memo}</td>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/*<td><img src={event.imageSrc} alt={event.name}/></td>*/}
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default function EventList({stateName, eventList}) {
    return (
        <>
            <h2>{stateName} Event List</h2>
            {renderEventList(eventList)}
        </>
    );
}