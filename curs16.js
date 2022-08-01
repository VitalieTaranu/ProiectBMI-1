    document.querySelector('.verify') .addEventListener('click', function () {
        const valoare1 = document.querySelector('.nume').value;
        const valoare2 = document.querySelector('.an').value;
        const valoare3 = document.querySelector('.inaltime').value;
        const valoare4 = document.querySelector('.greutate').value;

    
let BMI = (valoare4 / (valoare3 **2)); 

 
        console.log(valoare1);
        console.log(valoare2);
        console.log(valoare3);
        console.log(valoare4);

        let rezultat = `${valoare1} are ${BMI}`
      
        document.querySelector('.testclasa').textContent = rezultat;
    
    }) 

    document.querySelector('.verify1') .addEventListener('click', function () {
        const valoare1 = document.querySelector('.nume').value;
        const valoare2 = document.querySelector('.an').value;

       
        let virsta = 2022 - valoare2;
 
        console.log(virsta);
       
        let rez = `${valoare1} are ${virsta} ani`

       document.querySelector('.testclasa1').textContent = rez;
    }) 



    document.querySelector('.verify2') .addEventListener('click', function () {
        const val1 = document.querySelector('.nume1').value;
        const val2 = document.querySelector('.an1').value;
        const val3 = document.querySelector('.inaltime1').value;
        const val4 = document.querySelector('.greutate1').value;

    
let BMI1 = (val4 / (val3 **2)); 

 
        console.log(val1);
        console.log(val2);
        console.log(val3);
        console.log(val4);

        let rezultat1 = `${val1} are ${BMI1}`
      
        document.querySelector('.testclasa2').textContent = rezultat1;
    
    }) 

    document.querySelector('.verify3') .addEventListener('click', function () {
        const val1 = document.querySelector('.nume1').value;
        const val2 = document.querySelector('.an1').value;

       
        let virsta1 = 2022 - val2;
 
        console.log(virsta1);
       
        let rez1 = `${val1} are ${virsta1} ani`

       document.querySelector('.testclasa3').textContent = rez1;
    }) 


document.querySelector('.verify4').addEventListener('click', function() {
    const valoare3 = document.querySelector('.inaltime').value;
    const valoare4 = document.querySelector('.greutate').value;
    const val3 = document.querySelector('.inaltime1').value;
    const val4 = document.querySelector('.greutate1').value;
    const valoare1 = document.querySelector('.nume').value;
    const val1 = document.querySelector('.nume1').value;
    let BMI = (valoare4 / (valoare3 **2)); 
    let BMI1 = (val4 / (val3 **2)); 
    let text = "";
    BMI > BMI1 ? text = `BMI - ul lui ${valoare1} este mai mare decat al ${val1}` : text = `BMI -ul lui ${valoare1} este mai mic decat al ${val1}`
               document.querySelector('.testclasa4').textContent = text;
})