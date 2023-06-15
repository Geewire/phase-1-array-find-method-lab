// code your solution here


function superbowlWin(record){
    const win = record.find(collection => collection.result === "W");
    console.log(win)
    if (win) {
         return win.year;
    }else {
        return undefined;
}
}
