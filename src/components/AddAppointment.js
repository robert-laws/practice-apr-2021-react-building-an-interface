import React, { useState } from 'react';
import { BiCalendarPlus } from 'react-icons/bi';

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const clearData = {
    ownerName: '',
    petName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: '',
  };

  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);

  const handleClick = () => {
    setToggleForm((prev) => !prev);
  };

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormDataPublish = () => {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + ' ' + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(clearData);
    setToggleForm((prev) => !prev);
  };

  return (
    <div>
      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? 'rounded-t-md' : 'rounded-md'
        }`}
        onClick={handleClick}
      >
        <div className='flex items-center mx-1 space-x-1'>
          <BiCalendarPlus className='inline-block align-text-top' />{' '}
          <span>Add Appointment</span>
        </div>
      </button>
      {toggleForm && (
        <div className='border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4'>
          <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5'>
            <label
              htmlFor='ownerName'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Owner Name
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <input
                type='text'
                name='ownerName'
                id='ownerName'
                value={formData.ownerName}
                onChange={handleChange}
                className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5'>
            <label
              htmlFor='petName'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Pet Name
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <input
                type='text'
                name='petName'
                id='petName'
                value={formData.petName}
                onChange={handleChange}
                className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5'>
            <label
              htmlFor='aptDate'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Apt Date
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <input
                type='date'
                name='aptDate'
                id='aptDate'
                value={formData.aptDate}
                onChange={handleChange}
                className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5'>
            <label
              htmlFor='aptTime'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Apt Time
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <input
                type='time'
                name='aptTime'
                id='aptTime'
                value={formData.aptTime}
                onChange={handleChange}
                className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
              />
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5'>
            <label
              htmlFor='aptNotes'
              className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
            >
              Appointment Notes
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <textarea
                id='aptNotes'
                name='aptNotes'
                rows='3'
                value={formData.aptNotes}
                onChange={handleChange}
                className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md'
                placeholder='Detailed comments about the condition'
              ></textarea>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='submit'
                onClick={handleFormDataPublish}
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAppointment;
