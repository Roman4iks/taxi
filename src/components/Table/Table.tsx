import React from 'react';
import styles from './Table.module.scss';
import DateTime from '../DateTime/DateTime';
import data from '../../data.json';
import Price from '../Price/Price';

const Table = () => {
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
              <DateTime date={date} time={time} />
              <Price price={Number(price)} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
