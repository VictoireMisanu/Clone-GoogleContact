const burger = document.querySelector("svg[id = 'icoOpen']")
const contactIcon = document.querySelector("img[src = 'pictures/contact_icon.png'")
const contactTitle = document.querySelector("a[ href = './index.html']")
const searchZone = document.querySelector("input[name = 'search']")
const searchIcon = document.querySelector("img[src = 'pictures/searchIcon.jpg']")
const header = document.querySelector("header")
const btnCreateContact = document.querySelector("a[class = 'createContact']")
const btnContactList = document.querySelector("a[ class = 'contactList']")
const sideNav = document.querySelector("div[class = 'sidenav']")
const allContacts = document.querySelector("div[class = 'allContacts']")
const mainSection = document.querySelector("main")


mainSection.classList.add('ordered')
searchIcon.classList.add('alignDimine')
burger.classList.add('alignDimine')
contactIcon.classList.add('alignDimine')
contactTitle.classList.add('bigger')
searchZone.classList.add('goodLooking')
searchZone.setAttribute("placeHolder","Rechercher")
header.classList.add('centered')
btnCreateContact.classList.add('measureColorCreateContact')
btnContactList.classList.add('measureColorContactList')

burger.addEventListener("click", function(){
    if(sideNav.classList.contains('pushToTheLeftSide')){
        sideNav.classList.remove('pushToTheLeftSide')
    }
    else{
        sideNav.classList.add('pushToTheLeftSide')
    }
})

allContacts.innerHTML = `<div>Bonjour</div>`
