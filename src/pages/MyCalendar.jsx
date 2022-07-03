import React,{useState} from 'react';
import {Header} from '../components'

import {Calendar,dateFnsLocalizer} from 'react-big-calendar';
import {format,parse,startOfWeek,getDay} from 'date-fns';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { scheduleData } from '../data/dummy';

const locales = {
  "en-CA":require("date-fns/locale/en-CA")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const MyCalendar = () => {
  const [newEvent, setNewEvent] = useState({title:"",start:"",end:""})
  const [allEvents, setAllEvents] = useState(scheduleData)

  const handleAddEvent=()=>{
    setAllEvents([...allEvents,newEvent])
  }

  return (
    <div  className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <div className="">
        <input type="text" placeholder='Add Title' style={{width:"20%",marginRight:"10px"}} value={newEvent.title} onChange={e=>setNewEvent({...newEvent,title:e.target.value})} />
        <DatePicker placeholderText="Start Date" style={{marginRight:"10px"}} selected={newEvent.start} onChange={start=>setNewEvent({...newEvent,start})} />
        <DatePicker placeholderText="End Date" style={{marginRight:"10px"}} selected={newEvent.end} onChange={end=>setNewEvent({...newEvent,end})} />
        <button style={{marginTop:"10px"}} onClick={handleAddEvent}>add event</button>
      </div>
      <Calendar localizer={localizer} events={allEvents}  startAccessor="start" endAccessor="end" style={{height:500,  margin:"50px"}} />
    </div>
  )
}

export default MyCalendar
