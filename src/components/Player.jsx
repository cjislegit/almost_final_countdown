import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  let [nameInput, setNameInput] = useState(null);

  const handleName = () => {
    setNameInput(playerName.current.value);
    playerName.current.value = '';
  };
  return (
    <section id='player'>
      <h2>Welcome {nameInput ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type='text' />
        <button onClick={handleName}>Set Name</button>
      </p>
    </section>
  );
}
