

// 1 davalebaaaaa

function number(p4,t7){
    return p4 * t7; 
}

let multiplication = number(2,5);
console.log(multiplication)


// 2 davaleba
function square(d5) {
    return d5 * 4
}
const d5 = number(5,4);


console.log(d5)

// davaleba4

function random(y) {
    return Math.floor(Math.random() * 101); 
}
 let testt = random();
 console.log(testt)


 
//  alinaaaaa eseec xom sheizleba tu es ufro sworia???
 function random(t) {
    return Math.floor(Math.random() * (+101 - 1)); 
}
 let test = random();
 console.log(testt)

//  davaleba 5

// function  getCurrencySymbolFromCode(usd, eur, gel) {
//     let mon = {
//         $ : usd,
//         e : eur,
//         ლ : gel,
//     }
//     return eur
// }
// const exch =  getCurrencySymbolFromCode("gel")

// console.log(exch)


// viciii arasworiaaaaaaaaa:(((((())))))

function getCurrencySymbolFromCode(usd, eur, gel) {
    switch (usd, eur, gel) {
        case 0:
          text = " $";
          break;
        case 1:
          text = " e";
          break;
        case 2:
            text = " ლ";
            break;
        default:
          text = "No value found";
      }
      return text;
    
}
const exch =  getCurrencySymbolFromCode(0)
console.log(exch)



const infoStudent = [
    {
        name: "Pavle",
        age : 33,
        addres : "didube",
    },
    {
        name: "nino",
        age : 30,
        addres : "gldani",
    },
    {
        name: "tea",
        age : 25,
        addres : "vake",
    },
    {
        name: "gio",
        age : 20,
        addres : "saburtalo",
    },
    {
        name: "lasha",
        age : 35,
        addres : "digomi",
    },
]

const studentAgeInfo =  infoStudent.forEach(el =>{
     el.age < 26;
    console.log(el)
})
