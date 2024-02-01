document.addEventListener('touchstart', () => {
    if (gameBeginning == false) {
      console.log('Game Started');
      gameBeginning = true;
      levelUp();
    }
  });