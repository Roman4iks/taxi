import { useEffect, useState } from 'react';
import Select from './components/Select/Select';
import Table from './components/Table/Table';
import axios from 'axios';

interface coinDataProps {
  price: number;
  date: String;
}

function App() {
  const [timer, setTimer] = useState<number>(1);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/api/data');
        const { quote } = data.data.BTC;
        setData(quote.USD.price);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Select timer={timer} setTimer={setTimer} />
      <Table />
    </div>
  );
}

export default App;
