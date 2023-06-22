import React, { Dispatch, SetStateAction } from 'react';
import styles from './Select.module.scss';
interface SelectProps {
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
}

const Select: React.FC<SelectProps> = ({ timer, setTimer }) => {
  return (
    <div className={styles.root}>
      <div>
        <p>Интервал сканирования</p>
        <select value={timer} onChange={e => setTimer(Number(e.target.value))}>
          <option value='1'>1 минута</option>
          <option value='30'>30 минут</option>
          <option value='60'>1 час</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
