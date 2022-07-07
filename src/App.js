import './App.css';
import { CalcProvider } from './providers/calc';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className='App'>
      <CalcProvider>
        <Calculator />
      </CalcProvider>
    </div>
  );
}

export default App;
