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
const messageForm = document.getElementById("message_form");

//  addEventListener() There is no "=" equal sign for the method.
messageForm.addEventListener("submit", (eSubmitMessage) => {
    eSubmitMessage.preventDefault();
    // grab name, email, message from whatever the user typed into their browser.
    // use (.value) to grab the value of each field.
    const userName = eSubmitMessage.target.userName.value;
    const userEmail = eSubmitMessage.target.userEmail.value;
    const userMessage = eSubmitMessage.target.userMessage.value;
 
    // select the empty <ul></ul> under "Messages" of html; and then create & add <li> into that <ul>
    const messageList = document.getElementById("message_post").querySelector("ul");
    const newMessage = document.createElement("li");
    // display the messages in a list.

    newMessage.innerHTML = 
    `<a href="mailto:${userEmail}">${userName}</a>`
    + `<span>wrote: ${userMessage}</span>`;

    //append newMessage<li> to messageList<ul>, one at a time, each append is a new <li>
    messageList.appendChild(newMessage);

    // reset the form back to blank.
    // the .reset function is for form.  I need to select <form>, not <section>, for it to work.
    messageForm.reset();


    
    // make "edit" button, append to each <li>
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.innerText = 'Edit'
    newMessage.appendChild(editButton);
    //  Click "Edit", change editButton to saveButton.
    editButton.addEventListener("click", (eEditingMessage) => {
      // define li: the parent node of edit Button.
      li = editButton.parentNode;
      // make "save" button.
      const saveButton = document.createElement('button');
      saveButton.type = 'button';
      saveButton.innerText = 'Save'
      // insert save before edit.
      li.insertBefore(saveButton, editButton);
      // get rid of edit button.
      li.removeChild(editButton);
    })
      


    // make "remove" button, append to each <li>
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remove'
    newMessage.appendChild(removeButton);

    //  listen to "click" of Remove Button, remove the removeButton and its parentNode<li> at the same time.
    removeButton.addEventListener("click", (eRemoveMessage) => {
      const entry = removeButton.parentNode;
      entry.remove();
      if(messageList.hasChildNodes() === false){
        document.getElementById("message_post").hidden= true;
      };
    })

    //  hide the whole section of "message_post" when there is no message to post.
    if(messageList.hasChildNodes() === true){
      document.getElementById("message_post").hidden= false;
    }

})

// without submit clickevent, the hidden is true. const another messageList(2) because it's outside submit click event, so it's less confusing.
const messageList2 = document.getElementById("message_post").querySelector("ul");
if(messageList2.hasChildNodes() === false){
  document.getElementById("message_post").hidden= true;
}







// consider adding a button to <aside> to tuck away the floating window.
// <aside> background color dark green, orange border.
// make (shrink) button in js, createElement button, append it to <aside>.
// Listen click(js), change (position: relative) in css (inline css? in js??), make (shrink) button disappear(js).
// use a <style> tag to inject an actual string of CSS into the DOM.
// if(button click){
//   position: relative; (cs)
//   (remove button) display: none; (cs)
//   remove/hide button; (js)
// }
// The button is only needed on large screen.  Get rid of the button in @media.

      
   

//     // make "edit" button.
//     const editButton = document.createElement('button');
//     editButton.type = 'button';
//     editButton.innerText = 'Edit'
//     // append "editButton" to each message <li>
//     newMessage.appendChild(editButton);

//     // make "save" button.
//     const saveButton = document.createElement('button');
//     saveButton.type = 'button';
//     saveButton.innerText = 'Save'
//     // append "saveButton" to each message <li>
//     newMessage.appendChild(saveButton);

// //  listen to "click" of editButton, change userMessage into a input-text field, get rid of the userMessage, change the editButton to SaveButton.
// editButton.addEventListener("click", (eEditingMessage) => {
//   // add a text field for editedMessage, make it starts with the value of userMessage.
//   const editingMessage = document.createElement("input");
//   editingMessage.type = "text";
//   editingMessage.value = `${userMessage}`
//   // put editedMessage before userMessage in the same node;
//   insertBefore(editingMessage, userMessage);
//   // get rid of the userMessage node, so what's left is the new node <editedMessage>.
//   removeChild(userMessage);
//   // put SaveButton before editButton;
//   insertBefore(saveButton, editButton);
//   // get rid of editButton node, so what's left is the safeButton node.
//   removeChild(editButton);
// })

// //  listen to "click" of saveButton, change the input-text field into a editedMessage span, get rid of the editingMessage, change the saveButton back to editButton.
// editButton.addEventListener("click", (eSaveMessage) => {
//   // add a span to display edited message, the value of the message is editingMessage.
//   const editedMessage = document.createElement("span");
//   editedMessage.value = `${editingMessage}`
//   // put editedMessage before editingMessage in the same node;
//   insertBefore(editedMessage, editingMessage);
//   // get rid of the editingMessage node, so what's left is the new node <editedMessage>.
//   removeChild(editingMessage);
//   // put editButton before saveButton;
//   insertBefore(editButton, saveButton);
//   // get rid of saveButton node, so what's left is the editButton node.
//   removeChild(saveButton);
// })

// Try append both buttons save and edit, then make one of them hidden.



