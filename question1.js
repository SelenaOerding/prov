// 1. Trängselskatt (3p)
// Skriv en funktion totalTax som räknar ut den totala trängselskatten som ska betalas
// för en array av bil-objekt. Varje bil-objekt har ett registreringsnummer och ett
// klockslag då de passerade betalstationen.

// Här är kostnader för olika tider:
// 6:00 - 6:59: 30 kr
// 7:00 - 7:59: 45 kr
// 8:00 - 8:59: 30 kr
// 9:00 - 18:59: 20 kr
// Övriga tider är gratis.

// Använd funktionen getHour för att plocka ut timmen ur ett klockslag.
// T.ex. "17:45" ger resultatet 17.
function getHour(time) {
  return parseInt(time.split(":")[0]);
}

// Arrayen av bilar följer denna struktur:
const taxedCars = [
  { registrationNumber: "TUU893", time: "6:30" },
  { registrationNumber: "YNK023", time: "7:10" },
  { registrationNumber: "BHN113", time: "8:30" },
  { registrationNumber: "LOP733", time: "18:02" },
  { registrationNumber: "MGY803", time: "23:30" },
];

function totalTax(cars) {
  return cars.reduce((total, car) => {
    const hour = getHour(car.time);

    if (hour >= 6 && hour < 7) {
      return total + 30;
    } else if (hour >= 7 && hour < 8) {
      return total + 45;
    } else if (hour >= 8 && hour < 9) {
      return total + 30;
    } else if (hour >= 9 && hour < 19) {
      return total + 20;
    }

    return total;
  }, 0);
}

// function totalTax(cars) {
//   return cars.reduce((total, car) => {
//     const hour = getHour(car.time);

//     if (hour === 6) {
//       return total + 30;
//     }

//     if (hour === 7) {
//       return total + 45;
//     }

//     if (hour === 8) {
//       return total + 30;
//     }
//     if (hour >= 9 && hour < 19) {
//       return total + 20;
//     }

//     return total;
//   });
// }

console.log(totalTax(taxedCars));

module.exports = totalTax;
