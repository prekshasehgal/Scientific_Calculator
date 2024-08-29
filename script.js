    
    const keyboard =  (event) => {
    const key = event.key;
  

    if (key >= '0' && key <= '9') {
      display.value += key;
    }
  

  if (key === '+' || key === '-' || key === '*' || key === '/') {

    
    if (['+', '-', '*', '/'].includes(display.value.slice(-1))) {

      display.value = display.value.slice(0, -1);
    }
    
    display.value += key;
  }
  
    if (key === 'Escape') {
        display.value = '';
      }
  
  
    if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    }

    if (key === 'Enter') {
      
        try {
        display.value = eval(display.value);
      } 

      catch (error) {
        display.value = 'Error';
      }
    }




  };

  function sin()
  {
      display.value=Math.sin(display.value);
  }

  function cos()
  {
      display.value=Math.cos(display.value);
  }

  function tan()
  {
      display.value=Math.tan(display.value);
  }

  function pow()
  {
      display.value=Math.pow(display.value,);
  }

  function sqrt()
  {
      display.value=Math.sqrt(display.value,2);
  }

  function log()
  {
      display.value=Math.log(display.value);
  }

  function pi()
  {
      display.value= 3.14159265359;
  }

  function e()
  {
      display.value+=2.71828182846;
  }


  function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        screen.value=f;
    }

    function percent() {
      try {
          if (display.value.includes('%')) {
              // Percentage of the current value
              display.value = parseFloat(display.value) / 100;
          } else {
              // Convert the current value to percentage
              display.value = eval(display.value) * 0.01;
          }
      } catch (error) {
          display.value = 'Error';
      }
  }

  
  document.addEventListener('keydown', keyboard)