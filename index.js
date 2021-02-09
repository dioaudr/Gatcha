//Psudocode
/** 
 * STORE gacha WITH ROUND UP OF gacha SET RANDOM NUMBER BETWEEN 0 AND 5
   DISPLAY gacha
   SWITCH gacha
    CASE 1
        "Coba lagi ya"
    CASE 2
        "selamat kamu mendapatkan kupon sebanyak 5"
    CASE 3
        "selamat kamu mendapatkan kupon sebanyak 15"
    CASE 4
        "selamat kamu mendapatkan kupon sebanyak 50"
    CASE 5
        "WOW, kamu menang jackpot! Selamat!!"
    
    END SWITCH
 */

// insert your code here

var gacha = Math.ceil(Math.random()*5);
console.log(gacha);
switch(gacha){
    case 1:
        console.log("Coba lagi ya");
        break;  
    case 2:
        console.log("selamat kamu mendapatkan kupon sebanyak 5");
        break;
    case 3:
        console.log("selamat kamu mendapatkan kupon sebanyak 15");
        break;
    case 4:
        console.log("selamat kamu mendapatkan kupon sebanyak 50");
        break;
    case 5:
        console.log("WOW, kamu menang jackpot! Selamat!!");
        break;
}