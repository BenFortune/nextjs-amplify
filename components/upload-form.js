import {useState} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { format } from 'date-fns'
import dateFnsFormat from 'date-fns/format';
import 'react-day-picker/lib/style.css';
import {SignOut} from './sign-out';
import {monthsMap} from '../months';
import {stateNameList} from '../statenames';
import {Storage, API} from 'aws-amplify';
import {createEvent} from '../src/graphql/mutations';


// TODO: overall - figure out form validation
export function UploadForm({authenticated}) {
    const FORMAT = 'MM/dd/yyyy';
    const currentDate = format(new Date(), FORMAT);
    const [imageFileObj, setImageFileObj] = useState();
    const [selectedDay, setSelectedDay] = useState();
    const [selectedMonth, setSelectedMonth] = useState(monthsMap[currentDate.split('/')[0]]);

    async function uploadEvent(event) {
        event.preventDefault();

        const {name, time, address, city, state, phone, email, memo, flier, files} = event.target;

        //TODO: format image name with state path prefix ex: /stateName/imageName
        //TODO: format selectedDate to be something more parseable
        //TODO: set priority for contact number/email
        console.log('Ben - selectedDay format', selectedDay);
        console.log('event info', format(selectedDay, FORMAT), selectedMonth, name.value, time.value, address.value, city.value, state.value, phone.value, email.value, memo.value, imageFileObj.name);

        try {
            const flierKey = await Storage.put(`/${state.value}/${imageFileObj.name}`, imageFileObj);
            const createResponse = await API.graphql({
                query: createEvent,
                variables: {
                    input: {
                        date: format(selectedDay, FORMAT),
                        month: selectedMonth,
                        name: name.value,
                        time: time.value,
                        address: address.value,
                        city: city.value,
                        state: state.value,
                        contact: phone.value,
                        memo: memo.value,
                        image: flierKey?.key
                    }
                }
            })

            console.log('Ben - SUCCESS UPLOADING FILE', flierKey);
            console.log('Ben - api response', createResponse);
        } catch (error) {
            console.log('Ben - Error uploading file: ', error);
        }
    }

    function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
    }

    function handleDayChange(selectedDay) {
        const formattedDate = format(selectedDay, FORMAT);
        const month = formattedDate.split('/')[0];
        const formattedMonth = monthsMap[month];
        console.log('Ben - monthsMap', formattedMonth);
        setSelectedMonth(formattedMonth);
        setSelectedDay(selectedDay);
    }

    return (
        <>
            <h1>Upload Flier</h1>
            <p>{authenticated}</p>
            <form onSubmit={uploadEvent}>
                <label htmlFor="date">Event Date</label>
                {/*TODO: extract this to own component*/}
                <DayPickerInput
                    value={selectedDay}
                    formatDate={formatDate}
                    format={FORMAT}
                    onDayChange={handleDayChange}
                    dayPickerProps={{
                        selectedDays: selectedDay,
                    }}
                    placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                />
                <label htmlFor="city">Event Name</label>
                <input type="text" name="name"/>
                <label htmlFor="city">Event Time</label>
                <input type="text" name="time"/>
                <label htmlFor="address">Event Address</label>
                <input type="text" name="address"/>
                <label htmlFor="city">Event City</label>
                <input type="text" name="city"/>
                <label htmlFor="state">Event State</label>
                {/*TODO: extract this to own component*/}
                <select name="state">
                    {stateNameList.map((stateName) => (
                        <option name={stateName.abbreviation} key={stateName.fullName}>{stateName.abbreviation}</option>
                    ))}
                </select>
                <label htmlFor="phone">Event Contact Phone</label>
                <input type="text" name="phone"/>
                <label htmlFor="email">Event Contact Email</label>
                <input type="email" name="email"/>
                <label htmlFor="memo">Event Memo</label>
                <input type="text" name="memo"/>
                <label htmlFor="flier">Event Flier Upload</label>
                <input type="file" name="flier" accept="image/*" onChange={(event) => setImageFileObj(event.target.files[0])}/>
                <button type="submit">Upload Event</button>
            </form>
            <SignOut />
        </>
    )
}