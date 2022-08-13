import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { UseCharacter } from './hooks/useCharacter';

const App = () => {
const char = UseCharacter('Cleverton');
const char2 = UseCharacter('Ivanira');

useEffect(() => {
   window.addEventListener('keydown', handleKeyDown);
}, []);

  const handleKeyDown = (e: KeyboardEvent) => {
   switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
          char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
          char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
          char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
          char.moveDown();
   }
  }

  return (
      <C.Container>
         <C.Map>
          <Character x={char.x} y={char.y} side={char.side} />
          <Character x={char2.x} y={char2.y} side={char2.side} />
         </C.Map>
      </C.Container>
  );  
}

export default App;