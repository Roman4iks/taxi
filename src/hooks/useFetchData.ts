import { useEffect, useRef, useState } from "react";
import { CoinData } from "../App";
import { fetchApi } from "../api/ApiData/fetchDataApi";
import getTimeIntervalInMilliseconds from "../utils/getTimeIntervalInMilliseconds";
import { TimeInterval } from "../@types/interval";
import { SortPropertyEnum } from "../@types/sort";
import useSortData from "./useSortData";

function useFetchData(interval: TimeInterval, sort: SortPropertyEnum) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [apiData, setApiData] = useState<CoinData[]>([]);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);

  const sortedData = useSortData(apiData, sort);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetchApi(setApiData, setLoading, interval);
        setPageCount(Math.round(apiData.length / 10));
        console.log("REQUEST")
      } catch (error) {
        console.log("ERROR", error);
      }
    };

    const fetchDataWithInterval = async () => {
      fetchData();

      timer.current = setTimeout(async () => {
        await fetchDataWithInterval();
      }, getTimeIntervalInMilliseconds(interval));
    };

    fetchDataWithInterval();

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
  }, [interval]);
  return { isLoading, apiData: sortedData, pageCount };
}

export default useFetchData;
