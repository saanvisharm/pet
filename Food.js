class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){ 
      background(46,139,87);
       fill(255,255,254); 
       textSize(15); 
       if(lastFed>=12){
       text("Last Feed : "+ lastFed%12 + " PM", 50,30);
       }
       else if(lastFed==0){ text("Last Feed : 12 AM",50,30); }
       else{ text("Last Feed : "+ lastFed + " AM", 50,30); } 
      }

}
