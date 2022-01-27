// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (mass<=0 || height<=0){
        return 'INVALID INPUT'
    }else{
        var bmi=mass/(height*height)
        return parseInt(bmi)
    }

}

module.exports = BMICalculator;
