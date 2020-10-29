
//*problem number1*/
function feetToMile(feet){
    var mile = feet*0.0001893;
    return mile;
}
var firstMile = feetToMile(300);
console.log(firstMile);


//*problem number2*/
function woodCalculator(chair,table,bed){
    var totalChair = chair*1;
    var totalTable = table*3;
    var totalBed = bed*5;
    var totalFurniture = totalChair+totalTable+totalBed;
    return totalFurniture;
}

var chekTotalFurniture = woodCalculator(3,4,7);
console.log(chekTotalFurniture);


//*problem number3*/

function brickCalculator(floor){
    var brick=0;
      if(floor <= 10 ){
         brick = floor*15*1000;
         
      }
  
      else if(floor<=20){
        var firstSection = 10*15*1000;
        var remaining = floor-10;
        var secondSection = remaining*12*1000;
        brick = firstSection+secondSection;
  
      }
  
      else if (floor>20){
        var firstSection = 10*15*1000;
        var secondSection = 10*12*1000;
          var remaining = floor-20;
          var thirdsection = remaining*10*1000;
          brick = firstSection+secondSection+thirdsection;
  
      }
      return brick;

    }
    var count = brickCalculator(12);
    console.log(count);
      


//*problem number4*/

function tinyFriend(names){
    var arraynames = names[0];
    for(var i =0;i<names.length;i++){
     var tinyNames = names[i];
     if (tinyNames.length<arraynames.length){
        arraynames = tinyNames;
    }
}
return arraynames;
}
var checkTinyName = tinyFriend(["Farzeen","Fairuz","Farha","Popy","Munna"]);
console.log(checkTinyName);
