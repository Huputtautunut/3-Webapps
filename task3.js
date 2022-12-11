function task3() {

    document.getElementById("hiphop").innerHTML=" ";

    //tämä noutaa sen käyttäjän laittaman massan
    let m = document.getElementById("input1").value;

    //noudetaan käyttäjän pituus
    let h = document.getElementById("input2").value;

    //vaihteaan numerot string mudosta integeriin
    m=parseInt(m);
    h=parseInt(h);

    if(m>h){
    [m,h] = [h,m];
}
    console.log(m,h)

    for (let num = m; num <= h; num++) {
        if (num % 3 === 0 && num % 7 === 0){
            document.getElementById("hiphop").innerHTML+="Hiphop <br>";
            console.log(m,h)
        }
        else if (num % 3 === 0){
            document.getElementById("hiphop").innerHTML+="Hip <br>";
            console.log(m,h)
        }
        else if (num % 7 === 0){
            document.getElementById("hiphop").innerHTML+="Hop <br>";
            console.log(m,h)
        }
        
           else if (num % 3 != 0 && num % 7 != 0){
            document.getElementById("hiphop").innerHTML+=num + " <br>";
        console.log("testi")
           }
    }




}