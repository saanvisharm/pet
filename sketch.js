var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
 var lastFed, feed;
 var fedTime;
//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

 feed=createButton("Feed");
  feed.position(900,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

 fedTime=database.ref('FeedTime')
 fedTime.on("value",function(data){
lastFed=data.val()
 })

 if(lastFed>=12){
   AM:hour
 }
 else if(lastFed==0){
  text("Last Fed:12 AM",350,50)
 }
 else{
PM:hour
 }
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  var foodStock = foodObj.getFoodStock();
  if(foodStock <= 0){
    foodObj.updateFoodStock(foodStock * 0);
  }
  else{
    foodObj.updateFoodStock(foodStock -1);
  }
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime:hour()
  })
 
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
