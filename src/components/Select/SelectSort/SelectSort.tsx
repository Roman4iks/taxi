import React, { ChangeEvent} from 'react';
import styles from './SelectSort.module.scss';
import { SortNameEnum, SortPropertyEnum } from '../../../@types/sort';

interface SelectProps {
  sort: SortPropertyEnum;
  setSort: (sort: SortPropertyEnum) => void;
}

const SelectSort: React.FC<SelectProps> = ({ sort, setSort }) => {
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value as SortPropertyEnum;
    setSort(selectedSort);
  };

  return (
    <div className={styles.root}>
      <div>
        <p>Сортировать по : </p>
        <select value={sort} onChange={handleSortChange}>
          <option value={SortPropertyEnum.PRICE_ASC}>{SortNameEnum['-price']}</option>
          <option value={SortPropertyEnum.PRICE_DESC}>{SortNameEnum['price']}</option>
          <option value={SortPropertyEnum.DATE_ASC}>{SortNameEnum['-date']}</option>
          <option value={SortPropertyEnum.DATE_DESC}>{SortNameEnum['date']}</option>
        </select>
      </div>
    </div>
  );
};

export default SelectSort;
