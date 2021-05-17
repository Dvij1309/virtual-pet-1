var pet;
var database;
var dog;
var happyDog;
var foodS;
var foodStock;
var dogImage;
var happyDogImage;

function preload() {
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/happyDogImg.png");
}

function setup() {
  var canvas = createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dogImage);
  dog.scale = 0.15;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);


}


function draw() {

  background(46, 139, 87)


  if (keyWentDown("space")) {

    writeStock(foodS);
    dog.addImage(happyDogImage)

  }

  drawSprites();
  fill ("yellow")
  text("food remaining :" + foodS, 170, 200);
  textSize(13);
  fill ("yellow")
  text("Note : click UP ARROW to feed drago milk", 200, 150);


}

function readStock(data) {

  foodS = data.val();

}

function writeStock(x) {



  if (x <= 0) {

    x = 0;

  } else {

    x = x - 1;

  }
  database.ref('/').update({

    food: x

  })




}



