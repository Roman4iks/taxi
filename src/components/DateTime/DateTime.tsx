import React from 'react';

interface DateTimeProps {
  date: String;
  time: String;
}

const DateTime: React.FC<DateTimeProps> = ({ date, time }) => {
  return (
    <td>
      {date} {time}
    </td>
  );
};

export default DateTime;
