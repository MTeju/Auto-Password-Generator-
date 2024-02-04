
function autoGenPass(){


    let passLength = document.querySelector('.js-input').value;
    console.log(passLength);
    
    let includeNumbers = false;
    let num = document.querySelector('.num');

    if(num.checked){
        includeNumbers = true;
        /*console.log(includeNumbers)*/
    }
    else{
        includeNumbers=false;
        /*console.log(includeNumbers);*/
    }

    let includeLowercase = false;
    let lc = document.querySelector('.lc');

    if(lc.checked){
        includeLowercase = true;
        /*console.log(includeLowercase);*/
    }
    else{
        includeLowercase = false;
        /*console.log(includeLowercase);*/
    }

    let includeUpperCase = false;
    let uc = document.querySelector('.uc');

    if(uc.checked){
        includeUpperCase = true;
        /*console.log(includeUpperCase);*/
    }
    else{
        includeUpperCase = false;
        /*console.log(includeUpperCase);*/
    }

    let includeSymbols = false;
    let sc = document.querySelector('.sc');

    if(sc.checked){
        includeSymbols = true;
        /*console.log(includeSymbols);*/
    }
    else{
        includeSymbols = false;
        /*console.log(includeSymbols);*/
    }


    const password = genPass(passLength,
                            includeNumbers,
                            includeLowercase,
                            includeUpperCase,
                            includeSymbols);
        console.log(password);
}

function genPass(length, includeNumbers, includeLowerCase, includeUpperCase, includeSymbols){
    console.log(includeNumbers);
    console.log(includeLowerCase);
    console.log(includeUpperCase);
    console.log(includeSymbols);

    const numberChars = '0123456789';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specalChars = '!@#$%^&*()_+-=/';

    let allowedChars = '';
    let password = '';

    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeLowerCase ? lowerChars : "";
    allowedChars += includeUpperCase ? upperChars : "";
    allowedChars += includeSymbols ? specalChars : "";

    if(length < 0){
        return(document.querySelector('.result')
                    .innerHTML = "No -ve's");
    }
    else if(length == 0){
        return(document.querySelector('.result')
        .innerHTML = "No 0's");
    }

    if(allowedChars.length === 0){
        return(document.querySelector('.result')
                    .innerHTML = "Please Select..!👍");
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return (document.querySelector('.result')
                .innerHTML = password); 
        
}

