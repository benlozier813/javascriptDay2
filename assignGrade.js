function assignGrade(grade){
    if(grade > 100){
      console.log("That grade is impossibly high.")
    }
  else if(grade >= 90){
    console.log("You got an A.");
  }
  else if(grade >= 80 && grade < 90){
    console.log("You got a B");
  }
  else if(grade >= 70 && grade < 80){
      console.log("You got a C.");
  }
  else if(grade >= 60 && grade < 70){
      console.log("You got a D.");
  }
  else {
    console.log("You failed.");
  };
};
