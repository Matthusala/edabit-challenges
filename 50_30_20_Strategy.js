function fiftyThirtyTwenty(ati) {
  const needs = ati * 0.5;
  const wants = ati * 0.3;
  const savings = ati * 0.2;

  return {
    Needs: needs,
    Wants: wants,
    Savings: savings,
  };
}

console.log(fiftyThirtyTwenty(10000));
