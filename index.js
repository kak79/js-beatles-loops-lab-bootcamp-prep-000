// add solution here

function theBeatlesPlay(musicians, instruments) {

 var array = [];

  for (let i = 0; i < musicians.length; i++) {


        array.push(musicians[i] +" plays "+ instruments[i]);
    
   
   }
  
 return array;
 
}


function johnLennonFacts(array){
  var newArray = [];
  
  let i = 0;
  while ( i < array.length){
    newArray.push( array[i]  + "!!!" );
    i++ ;
  }
  return newArray;
}



function iLoveTheBeatles(){
   let i = 0;
 
function incrementVariable() {
  i = i + 1;
  return i;
}
 
  
  do {
    console.log("I love the Beatles!")
  }
  while (incrementVariable() < 15);
}
