// get the current year.
let today = new Date();
let thisYear = today.getFullYear();
// console.log(thisYear);

// populate copyright statement at the footer with current year.
yearDynamic = document.getElementById("copyright");
yearDynamic.innerText = `copyright  ${thisYear}  Echo Wang`;

// populate the "skill" section with js, add <li> to <ul>
let skillsArr = ["html","css","javascript"]
let skillsList = document.getElementById("skills").querySelector("ul")
for( let i=0 ; i<skillsArr.length ; i++ ){
    let skillListItems = document.createElement("li");
    skillListItems.innerText = skillsArr[i];
    skillsList.appendChild(skillListItems);
    // console.log(skillsArr[i]);
}

//  "leave_message" is what I will be adding things to, using DOM manipulation, so I select the form first.
const messageForm = document.getElementById("leave_message");

//  addEventListener() There is no "=" equal sign for the method.
messageForm.addEventListener("submit", (eSubmitMessage) => {
    eSubmitMessage.preventDefault();
    // grab name, email, message from whatever the user typed into their browser.
    // use (.value) to grab the value of each field.
    const userName = eSubmitMessage.target.userName.value;
    const userEmail = eSubmitMessage.target.userEmail.value;
    const userMessage = eSubmitMessage.target.userMessage.value;
    // console.log(messageForm);
    // console.log(userName, userEmail, userMessage);
 
    // select the empty <ul></ul> under "Messages" of html; and then create & add <li> into that <ul>
    const messageList = document.getElementById("messages").querySelector("ul");
    const newMessage = document.createElement("li");

    // display the messages in a list.
    newMessage.innerHTML = `
      <a href = "mailto: userEmail">${userName}</a>
      <span>wrote: ${userMessage}</span>`;
      // console.log(messageList);

    //append newMessage<li> to messageList<ul>, one at a time, each append is a new <li>
    messageList.appendChild(newMessage);

    // reset the form back to blank.
    messageForm.reset();

    // make "remove" button.
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remove'

    // append "remove" button to each message <li>
    newMessage.appendChild(removeButton);

    //  listen to "click" of Remove Button, remove the removeButton and its parentNode<li> at the same time.
    removeButton.addEventListener("click", (eRemoveMessage) => {
      const entry = removeButton.parentNode;
      entry.remove();
    })

})



