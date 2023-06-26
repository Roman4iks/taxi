import SelectInterval from './components/Select/SelectInterval/SelectInterval';
import Table from './components/Table/Table';
import useIntervalSelect from './hooks/useIntervalSelect';
import useFetchData from './hooks/useFetchData';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import { TimeInterval } from './@types/interval';
import SelectSort from './components/Select/SelectSort/SelectSort';
import { SortPropertyEnum } from './@types/sort';

export interface CoinData {
  price: number;
  date: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sort, setSort] = useState<SortPropertyEnum>(SortPropertyEnum.DATE_ASC)
  const { interval, handleIntervalChange } = useIntervalSelect(TimeInterval.FIVE_MINUTES);
  const { isLoading, apiData, pageCount } = useFetchData(interval, sort);
  return (
    <div>
      <SelectInterval interval={interval} setInterval={handleIntervalChange} />
      <SelectSort sort={sort} setSort={setSort} />
      <Table loading={isLoading} apiData={apiData} currentPage={currentPage} />
      <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </div>
  );
}

export default App;
