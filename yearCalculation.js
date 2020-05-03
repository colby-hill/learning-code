//calculates the time it will take for population growth based on given variables
//may 2, 2020

function nbYear(p0, percent, aug, p) {
  let iter = 0;
  let perc = (percent / 100)
  do {
    p0 = p0 + p0 * perc + aug
    iter++
  } while (p0 <= p)

  return iter;

}

nbYear(1500000, 0.25, 1000, 2000000);