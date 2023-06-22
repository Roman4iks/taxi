import { useState } from 'react';
import Select from './components/Select/Select';

function App() {
  const [timer, setTimer] = useState<number>(1);
  return (
    <div>
      <Select timer={timer} setTimer={setTimer} />
    </div>
  );
}

export default App;
