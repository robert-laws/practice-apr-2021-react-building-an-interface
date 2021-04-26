import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import Appointment from './components/Appointment';
import appointmentListData from './data.json';

function App() {
  return (
    <div className='container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl mb-4'>
        <BiCalendar className='inline-block text-red-400 mb-2' />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className='divide-y divide-gray-200'>
        {appointmentListData.map((appointment) => (
          <Appointment key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
