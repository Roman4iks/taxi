import React, { Dispatch, SetStateAction } from 'react';

interface SelectProps {
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
}

const Select: React.FC<SelectProps> = ({ timer, setTimer }) => {
  return (
    <label>
      Интервал сканирования
      <select
        style={{ marginLeft: 30 }}
        value={timer}
        onChange={e => setTimer(Number(e.target.value))}
      >
        <option value='1'>1 минута</option>
        <option value='30'>30 минут</option>
        <option value='60'>1 час</option>
      </select>
    </label>
  );
};

export default Select;
