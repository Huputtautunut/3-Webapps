function task2(){

    //tämä noutaa sen käyttäjän laittaman massan
    let m=document.getElementById("mass").value;

    //noudetaan käyttäjän pituus
    let h=document.getElementById("height").value;

    //laskut
    let result=m/(Math.pow(h,2)/100)*100;
    let round= Math.round(result*10)/10;
    console.log(round)

    //tulos
    if(!isNaN(result)){
        document.getElementById("bmi-calculator").innerHTML="BMI is = "+ round; 
    }

}
