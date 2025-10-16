document.addEventListener('DOMContentLoaded', ()=>{
  const list = document.querySelectorAll('li');
  for(let x=0; x<list.length; x++) {
    list[x].addEventListener('mouseover', moveRocket);
  }
});

const moveRocket = evt => {
  const rocket = document.getElementById('rocket');
  const li = evt.currentTarget;
  
  // Get the position of the li element
  const rect = li.getBoundingClientRect();
  
  // Set the rocket's position to match the li element
  rocket.style.position = 'absolute';
  rocket.style.left = rect.left + window.scrollX + 'px';
  rocket.style.top = rect.top + window.scrollY + 'px';
};
