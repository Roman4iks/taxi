import { useState } from 'react';
import Select from './components/Select/Select';
import DateTime from './components/DateTime/DateTime';

function App() {
  const [timer, setTimer] = useState<number>(1);

  return (
    <div>
      <Select timer={timer} setTimer={setTimer} />
      <DateTime />
    </div>
  );
}

export default App;
