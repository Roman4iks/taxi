import React from 'react';

interface DateTimeProps {
  date: String;
}

const DateTime: React.FC<DateTimeProps> = ({ date}) => {
  return (
    <td>
      {date}
    </td>
  );
};

export default DateTime;
