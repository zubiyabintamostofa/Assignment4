let oddFriend = ["abul", "kabul", "babul", "cabuls", "habul"];
let selectFriend = [];
function name(array) {
  //Get value throw loop
  for (let index = 0; index < array.length; index++) {
    const elementLegth = array[index].length;
    const element = array[index];
    //Check word length
    if (elementLegth % 2 != 0) {
      selectFriend.push(element);
      continue;
    }
  }
  return selectFriend;
}
//Call Funcation
let storeFriend = name(oddFriend);
//Display Friend Name
for (let index = 0; index < storeFriend.length; index++) {
  const element = storeFriend[index];
  console.log(element);
}
