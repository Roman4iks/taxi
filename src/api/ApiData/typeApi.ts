export interface ApiResponse {
    status: {
      timestamp: string;
      error_code: number;
      error_message: null;
      elapsed: number;
      credit_count: number;
      notice: null;
    };
    data: {
      BTC: {
        id: number;
        name: string;
        symbol: string;
        is_active: number;
        is_fiat: null;
        quotes: {
          timestamp: string;
          quote: {
            USD: {
              price: number;
              volume_24h: number;
              market_cap: number;
              circulating_supply: number;
              total_supply: number;
              timestamp: string;
            };
          };
        }[];
      };
    };
  }


export interface Quote {
    quote: {
      USD: {
        price: number;
      };
    };
    timestamp: number;
}
  
export interface CoinData {
    quotes: Quote[];
  }

export type SetApiDataFunction = (data: { price: number; date: string }[]) => void;
