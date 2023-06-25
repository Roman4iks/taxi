import React from 'react';
import styles from './Table.module.scss';
import DateTime from '../DateTime/DateTime';
import Price from '../Price/Price';
import { CoinData } from '../../App';



interface TableProps {
  loading: Boolean,
  apiData: CoinData[],
  currentPage: number,
}

const Table: React.FC<TableProps> = ({loading, apiData, currentPage}) => {
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedData = apiData.slice(startIndex, endIndex);
  if(loading){
    return <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>LOADING...</h1>
  }
  return (
    <table className={styles.root}>
      <thead>
        <tr>
          <th>Дата/Время</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map(({ date, price }, index) => {
          return (
            <tr key={index}>
              <DateTime date={date} />
              <Price price={Number(price)} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
