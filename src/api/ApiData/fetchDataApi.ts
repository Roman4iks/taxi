import axios, { AxiosResponse } from "axios";
import { ApiResponse, SetApiDataFunction } from "./typeApi";
import formatDateTime from "../../utils/formatDateTime";
import multiplyData from "../../utils/multiplyData";
import { TimeInterval } from "../../@types/interval";

export const fetchApi = async (
    setApiData: SetApiDataFunction,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    interval: TimeInterval
  ) => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(
        'http://localhost:3001/api/data',
        {
          params: {
            currency: 'USD',
            coin: 'BTC',
            count: 100,
            interval: interval,
          },
        }
      );
      const data = response.data.data.BTC.quotes.map((quote) => ({
        price: quote.quote.USD.price,
        date: formatDateTime(quote.timestamp),
      }));
      setApiData((multiplyData(data, 5)));
    } catch (error) {
      console.warn(error);
      setApiData([]);
    } finally {
      setLoading(false);
    }
  };