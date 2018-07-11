;(() => {
	
	'use strict';

  const hands = document.querySelectorAll('.hand');
	const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    if (seconds === 0) {
      hands.forEach(hand => hand.style.transition = 'none') 
    } else { 
      hands.forEach(hand => hand.style.transition = '');
    }

    const secondsDegree = ((seconds / 60) * 360) + 90;        
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;    
  }

  setInterval(setDate, 1000);

})();