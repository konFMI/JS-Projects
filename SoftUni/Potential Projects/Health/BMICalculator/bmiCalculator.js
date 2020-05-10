// Body mass inex calculator
// Parameters -> string: name, number: age, number: weight, number: height
// Output -> Object describing the person data with added BMI

function bmiCalculator(name, age, weight, heightInSantimeters) {
    const person = {
        name,
        personalInfo: {
            age,
            weight,
            heightInSantimeters
        }
    };
    const heightInMeters = heightInSantimeters / 100;
    const bmi = Math.round(weight / (Math.pow(heightInMeters, 2)));
    person['BMI'] = bmi;
    let status = '';

    if (bmi < 18.5) {
        person['status'] = 'underweight';
    } else if (bmi < 25) {
        person['status'] = 'normal';
    } else if (bmi < 30) {
        person['status'] = 'overweight';
    } else {
        person['status'] = 'obese';
        person['recommendation'] = 'admission required';
    }

    return person;
}

console.log(bmiCalculator('Petkan', 20, 80, 178));