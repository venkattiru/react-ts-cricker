import React = require('react');

export default function Cricket() {
  const [val, setVal] = React.useState('0');
  const cricObj = [
    {
      name: 'out',
      value: 'Stumped Out',
    },
    {
      name: '0',
      value: 'No runs',
    },
    {
      name: '1',
      value: '1 Run',
    },
    {
      name: '2',
      value: '2 Runs',
    },
    {
      name: '3',
      value: '3 Runs',
    },
    {
      name: '4',
      value: 'What a shot!.. Four',
    },
    {
      name: 'out',
      value: 'Ouch!! Hit Wicket',
    },
    {
      name: '6',
      value: 'Its a SIXER',
    },
    {
      name: 'wide',
      value: 'Wide',
    },
    {
      name: 'bye',
      value: '1 Bye',
    },
    {
      name: 'bye',
      value: '2 Byes',
    },
    {
      name: 'wide+4',
      value: 'Wide and a four',
    },
    {
      name: 'out',
      value: 'Bowled',
    },
    {
      name: 'out',
      value: 'Caught',
    },
    {
      name: 'out',
      value: 'LBW',
    },
    {
      name: 'freehit',
      value: 'Free hit',
    },
  ];
  const handleClick = () => {
    const value = Math.floor(Math.random() * 16);
    setVal(cricObj[value].value);
  };
  return (
    <div>
      <p>{val}</p>
      <button onClick={handleClick}>Play</button>
    </div>
  );
}
