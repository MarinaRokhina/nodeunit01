
setTimeout(() => {
  setImmediate(() => {
    console.log('Был диван, 4');
  });
  
  setTimeout(() => {
    console.log('Выйди вон! 8');
  }, 100);
  
  setImmediate(() => {
    console.log('На диване 5');
  });
  
  process.nextTick(() => {
    console.log('Чемодан, 2');
  });
  
  setTimeout(() => {
    console.log('Кто не верит – 7');
  }, 10);
  
  setImmediate(() => {
    console.log('Ехал слон. 6');
  });
  
  process.nextTick(() => {
    console.log('В чемодане 3');
  });
  
  console.log('Плыл по морю 1');

}, 100);
