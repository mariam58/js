//////////////////////////////
let ingredients = ["bread", "soya margarine", "jam"];
let sandwich = (function(){
 
    let bread = function(){
        console.log(ingredients[0] + "is cooking");
    };
    let margarine = function(){
        console.log("Now spreading the "+ingredients[1]);
    };
    let jam = function(){
        console.log("Now spreading the"+ingredients[2]);
    };
    window.makeSandwich = function(){
        setTimeout(bread, 1000);
        setTimeout(margarine, 2000);
        setTimeout(jam, 3000);
    }
})();

makeSandwich();





///////////////////////////////


let a = 10;
while(a>0){
    alert(a);
     
    a--;
    if(a===0){
        alert("Blast Off");
        
    }
    
   
}

///////////////////////////////


products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];
products.forEach(function(el,i){
    console.log(el);
  });



//////////////////////

let toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
function makePizza(a){
    console.log("make pizza with "+a.join(' and '));
}
makePizza(toppings)



let myName = ["mari", "nonikashvili"];
for (let i = 0; i < myName.length; i++) {
    myCapitalName=myName[i].toUpperCase();
    console.log(myCapitalName) 
}