function convert() {
    let inputtemp = parseFloat(document.getElementById("textbox").value); 
    let result = document.getElementById("result"); 
    let selectunit ; 
    let radios = document.querySelectorAll('input[type="radio"]');
    for (let radio of radios){
        if (radio.checked) {
            selectunit = radio.id;
            break;
        }
    }
    if (!selectunit){
        result.innerHTML= "please select a conversion type !";
        return;
    }
    let outputtemp ;
    if (selectunit==="tofahrenheit"){
        outputtemp= (inputtemp * 9/5) +32 ;
        result.innerHTML= `${inputtemp}°C = ${outputtemp.toFixed(2)}°F`;
    } else if (selectunit==="tocelsius") {
        outputtemp = (inputtemp- 32) * 5/9 ;
        result.innerHTML= `${inputtemp}°F = ${outputtemp.toFixed(2)}°C`;
    } else if (selectunit==="tokelvin"){
        outputtemp= inputtemp - 273.15 ;
        result.innerHTML= `${inputtemp}°K= ${outputtemp.toFixed(2)}°C`;
    } else if (selectunit==="tokelvin2"){
        outputtemp = (inputtemp * 9/5) - 459.67 ;
        result.innerHTML= `${inputtemp}°K = ${outputtemp.toFixed(2)}°F`;
    } else {
        result.innerHTML = "Invalid Selection";
    }
}