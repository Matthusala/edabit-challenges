function ageInDays(ageInYears) {
  // Assuming an average of 365.25 days in a year to account for leap years
  const daysInYear = 365.25;
  const ageInDays = ageInYears * daysInYear;
  return ageInDays;
}

// Example usage:
let ageYears = 25;
let ageDays = ageInDays(ageYears);
console.log(ageDays); // Output: 9126.25
