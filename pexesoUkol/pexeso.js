let klik = 0;
let prvniObrazek = 0;
let druhyObrazek = 0;

let zadniStrana = '<img src="img/cardBack.jpg" alt="">';

const predniStrany = ['<img src="img/andrew.jpg" alt="">','<img src="img/cristiano.jpg" alt="">','<img src="img/jaro.jpg" alt="">','<img src="img/karel.jpg" alt="">','<img src="img/koleso.jpg" alt="">',]

const cards = [document.getElementById('karta1'), document.getElementById('karta2'),document.getElementById('karta3'), document.getElementById('karta4'), document.getElementById('karta5'), document.getElementById('karta6'), document.getElementById('karta7'), document.getElementById('karta8'), document.getElementById('karta9'), document.getElementById('karta10')];

function zmenIMG(cardId){
    
        document.getElementById("nwm").innerHTML = "cardId:" + cardId;
        let k = 0;
        for(let i = 0; i<predniStrany.length; i+=2){
            if (cardId == i || i+1){
                cardIndex = k; 
                document.getElementById("m").innerHTML = "cardIndex:" + cardIndex;
            }else{
                k+=1;
            }
        }

        if(klik==0){
            prvniObrazek = cardId;
            document.getElementById("prvniObrazek").innerHTML = "prvniObrazek" + prvniObrazek;
            cards[cardId].innerHTML = predniStrany[cardIndex];
            klik ++;
        }else if(klik == 1){
            druhyObrazek = cardId;
            klik++;
            cards[cardId].innerHTML = predniStrany[cardIndex];
            document.getElementById("druhyObrazek").innerHTML = druhyObrazek;        
        }else if(prvniObrazek==druhyObrazek){
            prvniObrazek = 0;
            druhyObrazek = 0;
            klik=0;
        }else {
            cards[prvniObrazek].innerHTML = zadniStrana;
            cards[druhyObrazek].innerHTML = zadniStrana;
            prvniObrazek = 0;
            druhyObrazek = 0;

            document.getElementById("prvniObrazek").innerHTML = prvniObrazek;
            document.getElementById("druhyObrazek").innerHTML = druhyObrazek;        


            klik=0;
        }
}
