import {dummyData} from '../../dummy-data';

function buildAddress(address) {
    return address.split(',')[0];
}

function buildCity(address) {
    return address.split(',')[1];
}

export default function EventList({stateName, eventList}) {
    return (
        <>
            <h2>{stateName} Event List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event Name</th>
                        <th>Event Address</th>
                        <th>Event City</th>
                        <th>Contact</th>
                        <th>Memo</th>
                    </tr>
                </thead>
                <tbody>
                {eventList.map((event, index) => (
                    <tr key={index}>
                        <td>
                            {event.registered}
                        </td>
                        <td>
                            {event.company}
                        </td>
                        <td>
                            {buildAddress(event.address)}
                        </td>
                        <td>
                            {buildCity(event.address)}
                        </td>
                        <td>
                            {event.phone}
                        </td>
                        <td>
                            {event.greeting}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export async function getServerSideProps(context) {
    const stateName = context.params.statename;

    const eventList = dummyData;

    return { props: { stateName, eventList } }
}