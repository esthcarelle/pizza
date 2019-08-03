function Name(name){
  this.name=name;
  this.order=[];

}
function Order(size,crust){
    this.size=size;
    this.topping=[];
    this.crust=crust;
}
function Topping(topping){
    this.topping=topping;
}
var sizeOfPizza=["small","medium","big"];
var priceOfPizzaSize=["100","1000","10000"];
var toppingOfPizza=["peperoni","peperoni2","peperoni3"];
var priceOfToppingOfPizzaSmall=["100","200","300"];
var priceOfToppingOfPizzaMedium=["200","300","400"];
var priceOfToppingOfPizzaBig=["400","500","600"];
var crustOfPizza=["saucisse","saucisse2","saucisse3"];
var priceOfCrustofPizzaSmall=["100","200","300"] ;
var priceOfCrustofPizzaMedium=["200","300","400"];
var priceOfCrustofPizzaBig=["200","300","400"];
 
function compare(inputtedSize,inputtedTopping,inputtedCrust){
var i,top,top1,top2,total;
if(inputtedSize=="small"){
    top=100;
    for(i=0;i<=3;i++){
        if(toppingOfPizza[i]==inputtedTopping){
            top1=parseInt(priceOfToppingOfPizzaSmall[i]);

        }
        if(crustOfPizza[i]==inputtedCrust){
            top2=parseInt(priceOfCrustofPizzaSmall[i]);

        }
    }
    total=top+top1+top2;
}
else if(inputtedSize=="medium"){
    top=200;
    for(i=0;i<=3;i++){
        if(toppingOfPizza[i]==inputtedTopping){
            top1=parseInt(priceOfToppingOfPizzaMedium[i]);

        }
        if(crustOfPizza[i]==inputtedCrust){
            top2=parseInt(priceOfCrustofPizzaMedium[i]);

        }
    }
    total=top+top1+top2;
}
else if(inputtedSize=="big"){
    top=300;
    for(i=0;i<=3;i++){
        if(toppingOfPizza[i]==inputtedTopping){
            top1=parseInt(priceOfToppingOfPizzaBig[i]);

        }
        if(crustOfPizza[i]==inputtedCrust){
            top2=parseInt(priceOfCrustofPizzaBig[i]);

        }
    }
    total=top+top1+top2;
}
else{
    alert("invalid");
}
alert(total);
}
$(document).ready(function(){
$("form#blanks").submit(function(event){
event.preventDefault();
var inputtedName=$("input#name").val();
var inputtedSize=$("input#size").val();
var inputtedTopping=$("input#topping").val();
var inputtedCrust=$("input#crust").val();
var newClient=new Name(inputtedName);
var newOrder=new Order(inputtedSize,inputtedCrust);
var newTopping=new Topping(inputtedTopping);
newOrder.topping.push(newTopping);
newClient.order.push(newOrder);
console.log(inputtedTopping);
compare(inputtedSize,inputtedTopping,inputtedCrust);
});
$("#add-topping").click(function(){
    $("#topping").append(' <input type= "text" class="form-control" id="topping">');

});
});

