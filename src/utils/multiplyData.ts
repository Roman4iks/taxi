import { CoinData } from "../App";

const multiplyData = (data: CoinData[], multiplier: number) => {
    const multipliedData = [];
  
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      for (let j = 0; j < multiplier; j++) {
        multipliedData.push(item);
      }
    }
  
    return multipliedData;
  }
  export default multiplyData