import React, {useState, useRef, useCallback} from 'react';
import './Schedule.css';
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Natalie",
        start: new Date(2025, 6, 1),
        end: new Date(2025, 6, 1)
    },
    {
        title: "Beatrice",
        start: new Date(2025, 6, 1),
        end: new Date(2025, 6, 1)
    },
    {
        title: "Natalie",
        start: new Date(2025, 6, 3),
        end: new Date(2025, 6, 3)
    },
    {
        title: "Beatrice",
        start: new Date(2025, 6, 3),
        end: new Date(2025, 6, 3)
    }
]

function Schedule(){
    const clickRef = useRef(null);
    const buildMessage = (event, source) => {
        return `You clicked on "${event.title}" from ${source}.`;
    }
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)
    const onSelectEvent = useCallback((calEvent) => {
        window.clearTimeout(clickRef?.current)
        clickRef.current =window.setTimeout( () => {
            window.alert(buildMessage(calEvent, 'onSelectEvent'))
        }, 250)
    }, [])

    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className='App'>
            <div>
                <input type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}}
                    value = {newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
                    selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
                />
                {/* <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
                    selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
                /> */}
                <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add</button>
            </div>
            <Calendar localizer={localizer} 
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" 
            onSelectEvent={onSelectEvent}
            style={{height: 500, margin: "50px"}}
            />
        </div>
    )
}

export default Schedule;