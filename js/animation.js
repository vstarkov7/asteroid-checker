function flyAsteroid() {
  let asteroid = document.getElementById("asteroid");
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 3500) {
      clearInterval(id);
      asteroid.style.opacity = 0;
    } else {
      asteroid.style.opacity = 1;
      pos++;
      asteroid.style.top = pos + 'px';
      asteroid.style.right = pos + 'px';
    }
  }
}

flyAsteroid();