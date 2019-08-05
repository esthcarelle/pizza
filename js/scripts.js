function Name(name){
  this.name=name;
  this.order=[];

}
function Order(size,crust){
    this.size=[];
    this.topping=[];
    this.crust=[];
}

var sizeOfPizza=["small","medium","big"];
var priceOfPizzaSize=["1000","3000","5000"];
var toppingOfPizza=["vegetable","onion sausage","sugar pine","sauteed brocoli","chicken","pizza grec"];
var priceOfToppingOfPizzaSmall=["1500","1500","1500","1000","1000","1000"];
var priceOfToppingOfPizzaMedium=["2500","2500","2500","2000","2000","3000"];
var priceOfToppingOfPizzaBig=["3500","3500","3500","3500","3000","4000"];
var crustOfPizza=["deep dish","gluten","italian crust"];
var priceOfCrustofPizzaSmall=["1000","1000","1000"] ;
var priceOfCrustofPizzaMedium=["2000","2000","2000"];
var priceOfCrustofPizzaBig=["3000","3000","3000"];
var i,top0=0,top1=0,top2=0,total,j,k,g,proof;
function compare(inputtedSize,inputtedTopping,inputtedCrust){



for(k=0;k<inputtedSize.length;k++){
if(inputtedSize[k]=="small"){
    top0=top0+1000;
    proof="small";
}
 else if(inputtedSize[k]=="medium"){
    top0=top0+3000;
    proof="medium";
 }
else if(inputtedSize[k]=="big"){
    top0=top0+5000;
    proof="big";
}
else
alert("invalid input");
}
    
    for(g=0;g<=6;g++){
        
        for(j=0;j<inputtedTopping.length;j++){
            
            
            if((inputtedTopping[j]==toppingOfPizza[g])&&(proof=="small")){
                    top1=top1 + parseInt(priceOfToppingOfPizzaSmall[g]);
                    
            }
            if((inputtedTopping[j]==toppingOfPizza[g])&&(proof=="medium")){
                top1=top1 + parseInt(priceOfToppingOfPizzaMedium[g]);
                
        }
        if((inputtedTopping[j]==toppingOfPizza[g])&&(proof=="big")){
            top1=top1 + parseInt(priceOfToppingOfPizzaBig[g]);
            
    }


                }
                for(i=0;i<inputtedCrust.length;i++){
                    
                if((crustOfPizza[g]==inputtedCrust[i])&&(proof=="small")){
                    top2=top2+parseInt(priceOfCrustofPizzaSmall[g]);
                   
                }
                else if((crustOfPizza[g]==inputtedCrust[i])&&(proof=="medium")){
                    top2=top2+parseInt(priceOfCrustofPizzaMedium[g]);
                   
                }
                else if((crustOfPizza[g]==inputtedCrust[i])&&(proof=="big")){
                    top2=top2+parseInt(priceOfCrustofPizzaBig[g]);
                   
                }
                else{
                alert("invalid input");
                }
        }        
    }
    console.log(top1);
     console.log(inputtedTopping.length);             
   
   


    total=top0+top1+top2;
 

return total;
}
var place,pro;
function deliver(){
    var answer=prompt("type yes if you want to be delivered at home or no if not!");
    if(answer=="yes"){
     place=prompt("please enter the location");
     pro=1;
        alert("Additional Cost for every pizza delivery 2000frw and it will be delivered at " +place);
    }
    else{
        alert("thank You for choosing us!");
    }
}
$(document).ready(function(){
   

 
$("#add-order").click(function(){
    
$(".again").append(' <div class="again1">'+
'<div class="form-group size1">'+
'<h2>Another Command</h2>'+
       ' <label for="size">size</label>'+
        '<input type="text" class="form-control" id="size">'+
'</div>'+
'<div class="topping">'+
'<div class="form-group topping1" >'+
    
        '<label for="topping">topping</label>'+
        '<input type="text" class="form-control" id="topping">'
    +'</div>'+ 
'</div>'+

'<div class="form-group crust1">'+
        '<label for="crust">crust</label>'+
        '<input type="text" class="form-control" id="crust">'+
'</div>'+
'</div>'
);
});
$("#add-topping").click(function(){
    $(".topping").last().append(' <div class="form-group topping1" >' +           
    '<label for="topping">topping</label>'+
    '<input type="text" class="form-control" id="topping">'+
'</div> ');
});

$("form#blanks").submit(function(event){
event.preventDefault();
var inputtedName=$(this).find("input#name").val();
var newClient=new Name(inputtedName);

var newOrder=new Order();



 $(".topping1").each(function(){
   var inputtedTopping=$(this).find("input#topping").val();
 
    newOrder.topping.push(inputtedTopping); 
  
});
$(".size1").each(function(){
    var inputtedSize=$(this).find("input#size").val();
  
     newOrder.size.push(inputtedSize); 
   
 });
 $(".crust1").each(function(){
    var inputtedCrust=$(this).find("input#crust").val();
  
     newOrder.crust.push(inputtedCrust); 
   
 });




  
  var result=compare(newOrder.size,newOrder.topping,newOrder.crust);  
  deliver();
  var additional;
  if(pro==1){
    additional=2000
  }
  else{
      additional=0;
  }
  result=result+additional;
  newClient.order.push(newOrder); 
  
  newClient.order.forEach(function(address) {
    $("ul#addresses").last().append("<p>" +"Topping:"+ address.topping +"="+top1 +"<br>"+"Size:"+address.size + "= " +top0 +"<br>"+"Crust:"+ address.crust +"="+top2+"<br>"+ "additional fee for delivery ="+additional+"<br>"+"total::"+result+"</p>"  );
  });

// console.log(newOrder.size);
});


});

