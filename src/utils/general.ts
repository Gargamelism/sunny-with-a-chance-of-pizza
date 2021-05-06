
function calcPizzaChance(bugsCount: number, teamSize: number, minutesLeft: number): number {
  // assuming each bug takes an average of 60 min
  const bugsToTime = (bugsCount * 60) / teamSize;
  // will the time left suffice to complete them all?
  const chance = Math.round((bugsToTime / minutesLeft) * 100);

  return Math.min(chance, 100);
}

export { calcPizzaChance };