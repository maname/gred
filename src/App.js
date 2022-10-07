
import './App.css';

import React, { useState } from 'react';
import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'

const BUTTONS = 6;

function App() {
  
  const [buttons, setButton] = useState([]);
  function changeColor(index) {
      let newButtons = [...buttons];
      newButtons[index] = true;
      const count = newButtons.filter(x => x === true).length
      if(count === BUTTONS ) {
        let arr = [];
        for(let i=1; i<=BUTTONS; i++) {
          arr.push(false);
        }
        setButton(arr);
      } else{
        setButton(newButtons);
      }
    }
    let buttonsArr = [];
    for(let i = 0; i < BUTTONS ; i++ ) {
      buttonsArr.push( 
        <Button key={i} 
                variant="solid" 
                colorScheme={buttons[i] ? "red": "green"} 
                onClick={() => changeColor(i)}>Button {i}
        </Button>);
    }
  return (
    <ChakraProvider>
      <ButtonGroup variant='outline' spacing='6'>
       {buttonsArr}
    </ButtonGroup>
    </ChakraProvider>
  )
}

export default App;
