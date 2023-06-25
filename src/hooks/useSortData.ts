import { useEffect, useState } from "react";
import { CoinData } from "../App";
import { SortPropertyEnum } from "../@types/sort";

function useSortData(apiData: CoinData[], sort: SortPropertyEnum) {
  const [sortedData, setSortedData] = useState<CoinData[]>([]);

  useEffect(() => {
    const sortData = () => {
      const dataCopy = [...apiData];
      dataCopy.sort((a, b) => {
        return caseSort(a, b);
      });
      setSortedData(dataCopy);
    };

    const caseSort = (a: CoinData, b: CoinData) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      switch (sort) {
        case SortPropertyEnum.PRICE_ASC:
          return a.price - b.price;
        case SortPropertyEnum.PRICE_DESC:
          return b.price - a.price;
        case SortPropertyEnum.DATE_ASC:
          return dateA - dateB;
        case SortPropertyEnum.DATE_DESC:
          return dateB - dateA;
        default:
          return 0;
      }
    };

    sortData();
  }, [apiData, sort]);

  return sortedData;
}

export default useSortData;
