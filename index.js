// add solution here

function theBeatlesPlay(musicians, instruments) {

  for (let i = 0; i < 4; i++) {

    if (i === 0) {
      Object.assign({}, "Beatles", { ["John Lennon plays Guitar" });
      
    }
    else if (i === 1) {
      Object.assign({}, "Beatles", { ["Paul McCartney plays Bass Guitar" });

    }
    else if (i === 2) {
      Object.assign({}, "Beatles", { ["George Harrison"]: "Lead Guitar" });

    }
    else {
      (i === 3);
      Object.assign({}, "Beatles", { ["Ringo Starr"]: "Drums" });

    }
  }
  
  
 // Object.musicians().forEach(function ())
  //console.log(musicians + " plays " + instruments);
}