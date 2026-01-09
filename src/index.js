

let nickname = "Picachu"
let nivel = "Iniciante"
let qtdExperiencia = 2000

console.log(`Bem vindo ${nickname}`);


if(qtdExperiencia < 1000){
    nivel = "Ferro";
} else if(qtdExperiencia <= 2000){
    nivel = "Bronze";
} else if(qtdExperiencia <= 5000){
    nivel = "Prata";
} else if(qtdExperiencia <= 7000){
    nivel = "Ouro";
} else if(qtdExperiencia <= 8000){
    nivel = "Platina";
} else if(qtdExperiencia <= 9000){
    nivel = "Ascendente";
} else if(qtdExperiencia <= 10000){
    nivel = "Imortal";
} else{
    nivel = "Radiante";
}

console.log(`O herói de nome ${nickname} está no nível de ${nivel}`);










    

