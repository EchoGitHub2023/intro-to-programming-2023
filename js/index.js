let today = new Date();
let thisYear = today.getFullYear();

console.log(thisYear);

yearDynamic = document.getElementById("copyright");
yearDynamic.innerText = `copyright  ${thisYear}  Echo Wang`;


let skillsArr = ["html","css","javascript"]
let skillsList = document.getElementById("skills").querySelector("ul")
    
for( let i=0 ; i<skillsArr.length ; i++ ){
    let skillListItems = document.createElement("li");
    skillListItems.innerText = skillsArr[i];
    skillsList.appendChild(skillListItems);
    console.log(skillsArr[i]);
}

