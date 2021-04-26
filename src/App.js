import React, { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import Appointment from './components/Appointment';
// import appointmentListData from './data.json';

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState('');

  const fetchData = useCallback(async () => {
    const response = await fetch('./data.json');
    const allData = await response.json();

    if (allData) {
      setAppointmentList(allData);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onDeleteAppointment = (id) => {
    setAppointmentList((appointmentList) =>
      appointmentList.filter((item) => item.id !== id)
    );
  };

  const onQueryChange = (myQuery) => {
    setQuery(myQuery);
  };

  const filteredAppointments = appointmentList.filter((appointment) => {
    return (
      appointment.petName.toLowerCase().includes(query.toLowerCase()) ||
      appointment.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      appointment.aptNotes.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className='container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl mb-4'>
        <BiCalendar className='inline-block text-red-400 mb-2' />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search query={query} onQueryChange={onQueryChange} />

      <ul className='divide-y divide-gray-200'>
        {filteredAppointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={onDeleteAppointment}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
