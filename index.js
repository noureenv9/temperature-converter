function rolldice(){
    const numofdice = document.getElementById("numofdice").value;
    const diceresult= document.getElementById("diceresult");
    const diceimage = document.getElementById("diceimage");
    const values = [];
    const images = [];
    for (let i = 0; i < numofdice; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        values.push(randomValue);
        images.push(`<img src="./diced_img/${randomValue}.png" alt="Dice ${randomValue}">`);
    }
    diceresult.textContent = `dice rolled : ${values.join(', ')}`;
    diceimage.innerHTML=images.join('  '); 
}