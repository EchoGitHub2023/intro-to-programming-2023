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

// make nav stick.
window.onscroll = function() {myFunction()};
const navTabs = document.querySelector("nav");
const sticky = navTabs.offsetTop;
function myFunction() {
  if (window.scrollY > sticky) {
    navTabs.classList.add("sticky");
  } else {
    navTabs.classList.remove("sticky");
  }
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
    + `<span> wrote: ${userMessage}</span>`;

    //append newMessage<li> to messageList<ul>, one at a time, each append is a new <li>
    messageList.appendChild(newMessage);

    // reset the form back to blank.
    // the .reset function is for form.  I need to select <form>, not <section>, for it to work.
    messageForm.reset();

    // make "save" button, append to each <li>
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.innerText = 'Save'
    newMessage.appendChild(saveButton);
    // make "edit" button, append to each <li>
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.innerText = 'Edit'
    newMessage.appendChild(editButton);
    // make "remove" button, append to each <li>
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remove'
    newMessage.appendChild(removeButton);
    // hide saveButton
    saveButton.hidden = true;

    // make this input global (within sumbitButton) so I can use it for both "edit" event and "save" event.
    const editingMessage = document.createElement("input");

    //  listen to "click" of editButton, change userMessage into a input-text field, get rid of the userMessage, change the editButton to SaveButton.
    editButton.addEventListener("click", (eEditingMessage) => {
      // define li: the parent node of edit Button.
      const li = editButton.parentNode;
      // add a text field for editedMessage, make it starts with the value of userMessage.
      editingMessage.type = "text";
      editingMessage.value = `${newMessage.querySelector("span").innerHTML}`
      // append the textfield to <li> newMessage, put it before saveButton
      li.appendChild(editingMessage);
      li.insertBefore(editingMessage, saveButton);
      // hide edit button, un-hide save button
      editButton.hidden = true;
      saveButton.hidden = false;
    })

    // Listen to "save", change the value of newMessage(the original message)
    saveButton.addEventListener("click", (eSavingMessage) => {
      // define li2: the parent node of save Button newMessage<li>; call it li2 for saveButton 
      const li2 = saveButton.parentNode;
      
      // change the value of <span>, not the whole <li>.  This way I don't lose the edit, save, and remove buttons.
      li2.querySelector("span").innerHTML = 
      ` edited: ${editingMessage.value} (EDITED)`;

      // // This also works, but a bit lengthy, unessasary: change the value to edited message.
      // // Since the entire <li> is changed, I lose everything appended to that <li>, and I'll need to re-append the save, edit, and remove buttons.
      // li2.innerHTML = 
      // `<a href="mailto:${userEmail}">${userName}</a>`
      // + `<span> wrote: ${editingMessage.value} </span>`
      // + `<span>  (EDITED) </span>`;
      // newMessage.appendChild(saveButton);
      // newMessage.appendChild(editButton);
      // newMessage.appendChild(removeButton);

      // hide save button, un-hide edit button
      saveButton.hidden = true;
      editButton.hidden = false;
      // git rid of input field
      li2.removeChild(editingMessage);
    })

    //  listen to "click" of Remove Button, remove the removeButton and its parentNode<li> at the same time.
    removeButton.addEventListener("click", (eRemoveMessage) => {
      const li3 = removeButton.parentNode;
      li3.remove();
      if(messageList.hasChildNodes() === false){
        document.getElementById("message_post").hidden= true;
      };
    })

    //  hide the whole section of "message_post" when there is no message to post.
    if(messageList.hasChildNodes() === true){
      document.getElementById("message_post").hidden= false;
    }

}) //end of "submit" eventListener

// without submit clickevent, the hidden is true. const another messageList(2) because it's outside submit click event, so it's less confusing.
const messageList2 = document.getElementById("message_post").querySelector("ul");
if(messageList2.hasChildNodes() === false){
  document.getElementById("message_post").hidden= true;
}


// Populate "projects" with api
const githubRequest = new XMLHttpRequest();

githubRequest.addEventListener("load", (event) => {
  // addEventListner needs to be method of githubRequest.
  const repositories = JSON.parse(githubRequest.response);
  console.log(typeof repositories);
  console.log(repositories);
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  // const projectList = projectSection.getElementById("ajax");
  for ( let i=0 ; i<repositories.length ; i++ ){
    let project = repositories[i];
    if (project.name === "-intro-to-programming-section-5-Debugging_extraToBeDeleted"){
      continue;
    };
    if (project.name === "intro-to-programming-5-Debug"){
      continue;
    };
    const projectItem = document.createElement("li");
    projectItem.innerText = project.name;
    projectList.appendChild(projectItem);
  }
});

githubRequest.open('GET', 'https://api.github.com/users/EchoGitHub2023/repos');
githubRequest.send();





// consider adding a button to <aside> to tuck away the floating window.
// <aside> background color dark green, orange border.
// make (shrink) button in js, createElement button, append it to <aside>.
// Listen click(js), change (position: relative) in css (inline css? in js??), make (shrink) button disappear(js).
// use a <style> tag to inject an actual string of CSS into the DOM.
// if(button click){
//   position: relative; (css)
//   (remove button) display: none; (css)
//   remove/hide button; (js)
// }
// The button is only needed on large screen.  Get rid of the button in @media.




