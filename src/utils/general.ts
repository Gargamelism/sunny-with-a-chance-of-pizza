
function calcPizzaChance(bugsCount: number, minutesLeft: number): number {
  // assuming each bug takes an average of 30 min
  const bugsToTime = bugsCount * 30;
  // will the time left suffice to complete them all?
  const chance = Math.round((bugsToTime / minutesLeft) * 100);

  return Math.min(chance, 100);
}

export { calcPizzaChance };