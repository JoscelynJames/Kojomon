$(() => {
  $.get("http://localhost:3000/api/v1/food/3")
    .then(food =>{
      console.log(food);
      function main(){
      const last = food[0].last_interaction;
      const now = Date.now()
      const nlast = Date.parse(last)
      const nnow = Date.parse(now)
      //nnow is NaN
      const timeInMil = now-nlast
      const timeInSec = timeInMil/1000
      const timeInMin = timeInSec/60
      const timeInHrs = timeInMin/60
      const timeInDay = timeInHrs/24
      const flooredHrs = Math.floor(timeInHrs)
      const templateForFood = (120-flooredHrs)


      console.log("Type of nlast " + typeof nlast);
      console.log("Type of nnow " + typeof nnow);
      console.log("nlast " + nlast);
      console.log("now " + now);
      console.log(timeInMil);
      console.log(timeInSec);
      console.log(timeInMin);
      console.log(timeInHrs);
      console.log(timeInDay);
      console.log(templateForFood);
      console.log(templateForFood+1);
      //from here we need add in the on click function to add 1 equals 24(like what's happening on line 30). Either that or we need to convert that number into a percent, however I think that adding up to 24 will be easier. If we can't find figure out a health bar, we could to it like Health templateForFood/24. We should also figure out how to write in the function that if the health is a full 24 out of 24 that it should stop logging interaction clicks for food, unless we thing that a person continually clicking even when the health bar is full is an edge case in which case...idk make it a strech

    }
    console.log(main());
    })
});
