import React, { ChangeEvent} from 'react';
import styles from './SelectInterval.module.scss';
import { TimeInterval } from '../../../@types/interval';

interface SelectProps {
  interval: TimeInterval;
  setInterval: Function;
}

const SelectInterval: React.FC<SelectProps> = ({ interval, setInterval }) => {
  const handleIntervalChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedInterval = event.target.value as TimeInterval;
    setInterval(selectedInterval);
  };

  return (
    <div className={styles.root}>
      <div>
        <p>Интервал сканирования</p>
        <select value={interval} onChange={handleIntervalChange}>
          <option value={TimeInterval.FIVE_MINUTES}>5 минут</option>
          <option value={TimeInterval.THIRTY_MINUTES}>30 минут</option>
          <option value={TimeInterval.ONE_HOUR}>1 час</option>
        </select>
      </div>
    </div>
  );
};

export default SelectInterval;
