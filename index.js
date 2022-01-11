// code your solution here
function superbowlWin(arr){
   const sbWin = arr.find(element => element.result === 'W');
    if(sbWin){
        return sbWin.year
    } else {
        return undefined;
    }
}