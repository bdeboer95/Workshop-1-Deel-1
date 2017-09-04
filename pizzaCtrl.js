var app = angular.module('pizzaApp', []);

app.controller('pizzaCtrl', function($scope) {
    $scope.showMargerita=false;
     $scope.showBBQ=false;
      $scope.showPepperoni=false;
       $scope.showHawaii=false;
        $scope.showShoarma=false;
   
      
    
   
  
    $scope.person={firstName:'John',lastName:'Doe', address:'Amsterdamstraat', postalcode:'2718CC', housenumber:81, phonenumber:06283001010, };
    $scope.totalPrice=0.00;
  
    
    
    $scope.toppings = [
        {name:'Zwarte Olijven',price:1.00, selected:false},
        {name:'Paprika',price:1.00, selected:false},
        {name:'Champignons',price:1.20, selected:false},
         {name:'Ui',price:1.00, selected:false},
        {name:'Tomaat',price:1.00, selected:false}
    ];
    
     $scope.pizzas = [
        {name:'Margerita',price:10.00, count:0},
        {name:'Pepperoni',price:9.90, count:0},
        {name:'Shoarma',price:11.20, count:0},
         {name:'Hawaii',price:12.00, count:0},
        {name:'BBQ',price:10.00,count:0}
    ];
    $scope.moreThan0Pizzas=function (x) {
    if (x.count >0){
    return true;
    }
    else{
    return false;
    }
    }
    $scope.updateTotalPrice=function (x) {
    if(!x.selected)
    {
    x.selected=true;
    }
    else{
    x.selected=false;
    }
    if(x.selected){
    $scope.totalPrice=$scope.totalPrice+ x.price;
    }
    else{
    $scope.totalPrice=$scope.totalPrice- x.price;
    }
    }
    
     $scope.removePizza=function (y) {
    y.count--;
   if(!$scope.moreThan0Pizzas(y)){
    $scope.totalPrice=$scope.totalPrice- y.price;
    }
      if(y.name=="Margerita"){
     $scope.showMargerita=$scope.moreThan0Pizzas(y);
     }
    
     if(y.name=="Hawaii"){
     $scope.showHawaii=$scope.moreThan0Pizzas(y);
     }
      
     if(y.name=="Pepperoni"){
     $scope.showPepperoni=$scope.moreThan0Pizzas(y);
     }
     
     if(y.name=="Shoarma"){
     $scope.showShoarma=$scope.moreThan0Pizzas(y);
     }
  
    
      if(y.name=="BBQ"){
     $scope.showBBQ=$scope.moreThan0Pizzas(y);
     }
     
    
    }
    
    $scope.addPizza=function (y) {
    y.count++;
    if($scope.moreThan0Pizzas(y)){
    $scope.totalPrice=$scope.totalPrice+ y.price;
    }
    if(y.name=="Margerita"){
     $scope.showMargerita=$scope.moreThan0Pizzas(y);
     }
    
     if(y.name=="Hawaii"){
     $scope.showHawaii=$scope.moreThan0Pizzas(y);
     }
     
     if(y.name=="Pepperoni"){
     $scope.showPepperoni=$scope.moreThan0Pizzas(y);
     }
     
     if(y.name=="Shoarma"){
     $scope.showShoarma=$scope.moreThan0Pizzas(y);
     }
     
      if(y.name=="BBQ"){
     $scope.showBBQ=$scope.moreThan0Pizzas(y);
     }
     }
    
    
});