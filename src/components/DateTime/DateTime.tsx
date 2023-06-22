import React from 'react';
import styles from './DateTime.module.scss';

import data from '../../data.json';

const DateTime: React.FC = () => {
  return (
    <table className={styles.root}>
      <thead>
        <tr>
          <th>Дата/Время</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ date, time, price }, index) => {
          return (
            <tr key={index}>
              <td>
                {date} {time}
              </td>
              <td>{price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DateTime;
