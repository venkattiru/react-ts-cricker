import React = require('react');
import Over from './Over';
import TotalScore from './TotalScore';

export default function Cricket() {
  const [val, setVal] = React.useState('0');
  const cricObj = [
    {
      name: 'out',
      value: 'Stumped Out',
      sign: 'W',
    },
    {
      name: '0',
      value: 'No runs',
      sign: '0',
    },
    {
      name: '1',
      value: '1 Run',
      sign: '1',
    },
    {
      name: '2',
      value: '2 Runs',
      sign: '2',
    },
    {
      name: '3',
      value: '3 Runs',
      sign: '3',
    },
    {
      name: '4',
      value: 'What a shot!.. Four',
      sign: '4',
    },
    {
      name: 'out',
      value: 'Ouch!! Hit Wicket',
      sign: 'W',
    },
    {
      name: '6',
      value: 'Its a SIXER',
      sign: '6',
    },
    {
      name: 'wide',
      value: 'Wide',
      sign: 'WD',
    },
    {
      name: 'bye',
      value: '1 Bye',
      sign: '1b',
    },
    {
      name: 'bye',
      value: '2 Byes',
      sign: '2b',
    },
    {
      name: 'wide+4',
      value: 'Wide and a four',
      sign: 'WD+4',
    },
    {
      name: 'out',
      value: 'Bowled',
      sign: 'W',
    },
    {
      name: 'out',
      value: 'Caught',
      sign: 'W',
    },
    {
      name: 'out',
      value: 'LBW',
      sign: 'W',
    },
    {
      name: 'freehit',
      value: 'Free hit',
      sign: 'FH',
    },
  ];
  const handleClick = () => {
    const value = Math.floor(Math.random() * 16);
    setVal(cricObj[value].value);
  };
  return (
    <div>
      <TotalScore />
      <p>{val}</p>
      <button onClick={handleClick}>Play</button>
      <Over/>
    </div>
  );
}
