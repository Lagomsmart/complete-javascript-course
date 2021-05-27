let markWeight = 78
let markHeight = 1.69

let johnWeight = 92
let johnHeight = 1.95

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2

function bmi() {
  if (markBMI > johnBMI) {
    console.log(`Mark(${markBMI}) had a higher BMI than John(${johnBMI})`)
  } else {
    console.log(`John(${johnBMI}) had a higher BMI than Mark(${markBMI})`)
  }
}