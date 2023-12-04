import React from 'react';

const BusinessHours = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const hoursOfOperation = {
    Monday: '8:30 AM - 4:00 PM',
    Tuesday: '8:30 AM - 4:00 PM',
    Wednesday: '8:30 AM - 4:00 PM',
    Thursday: '8:30 AM - 4:00 PM',
    Friday: '8:30 AM - 4:00 PM',
    Saturday: '8:30 AM - 4:00 PM',
    Sunday: 'Closed',
  };

  return ( 
    <div className='bh'>
      <h7>Business Hours</h7>
      <table className='man'>
        <thead>
          <tr className='BusinessHours'>
            <th>Day</th>
            <th>Hours of Operation</th>
          </tr>
        </thead>
        <tbody className='time'>
          {daysOfWeek.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              <td>{hoursOfOperation[day]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessHours;
