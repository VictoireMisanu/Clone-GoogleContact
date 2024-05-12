const burger = document.querySelector("svg[id = 'icoOpen']")
const contactIcon = document.querySelector("img[src = 'images/contact_icon.png'")
const contactTitle = document.querySelector("a[ href = './index.html']")
const searchZone = document.querySelector("input[name = 'search']")
const searchIcon = document.querySelector("img[src = 'images/searchIcon.jpg']")
const header = document.querySelector("header")
const btnCreateContact = document.querySelector("a[class = 'btnCreateContact']")
const btnContactList = document.querySelector("a[ class = 'btnContactList']")
const sideNav = document.querySelector("div[class = 'sidenav']")
const allContacts = document.querySelector("div[class = 'allContacts']")
const mainSection = document.querySelector("main")
const divContact = document.querySelector("div[class = 'allContacts']")
console.log(divContact)


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
// divContact.classList.add('')


burger.addEventListener("click", function(){
    if(sideNav.classList.contains('pushToTheLeftSide')){
        sideNav.classList.remove('pushToTheLeftSide')
        //divContact.classList.add('takesTheWholePlace')
    }
    else{
        sideNav.classList.add('pushToTheLeftSide')
        // divContact.classList.remove('takesTheWholePlace')
    }
})
// création du contenu de la page ListContact

const table = document.createElement('table');
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')
const th = document.createElement('th')
const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')
const th4 = document.createElement('th')
const td = document.createElement('td')

// Création du contenu de la page Création d'un contact

const divCreateContact = document.createElement('div')
divCreateContact.classList.add('styleCreateContact')
// divCreateContact.textContent = "Bonjour"
const divCreatetContactHeader = document.createElement('div')
const divCreateContactBody = document.createElement('div')

divCreateContactBody.classList.add('styleDivCreateContactBody')
divCreatetContactHeader.classList.add('styleDivCreateContactHeader')
divCreateContact.append(divCreatetContactHeader)
divCreateContact.append(divCreateContactBody)
const arrowContainer = document.createElement('a')
const leftArrow = document.createElement('img')
leftArrow.src = './images/arrowLeft.png'
leftArrow.classList.add('alignDimine')
arrowContainer.append(leftArrow)
divCreatetContactHeader.append(arrowContainer)
arrowContainer.addEventListener("click", function (){
    divCreateContact.remove()
    mainSection.append(divContact)
})

const btnEnregistrer = document.createElement('input')
btnEnregistrer.setAttribute("type","submit")
btnEnregistrer.setAttribute("value","Enregistrer")
btnEnregistrer.classList.add('styleBtnEnregistrer')
divCreatetContactHeader.append(btnEnregistrer)


divContact.append(table)
table.append(thead)
table.append(tbody)
thead.append(tr)

tr.append(th,th1,th2,th3, th4)
console.log(tr)



table.className = 'styleTable'
th.className = 'styleBorder'
th1.className = 'styleBorder'
th2.className = 'styleBorder'
th3.className = 'styleBorder'
th4.className = 'styleBorder'
th.textContent = 'Titre'
th1.textContent = 'Email'
th2.textContent = 'Numéro de télépone'
th3.textContent = 'Fonction'
th4.textContent = 'groupe'


btnCreateContact.addEventListener("click", function (){

    divContact.remove()
    mainSection.append(divCreateContact)


})

btnContactList.addEventListener("click", function (){
    divCreateContact.remove()
    mainSection.append(divContact)
})
//td.className = 'styleBorder'
// allContacts.innerHTML = `<table>
// <thead>
//     <tr> 
//         <th>Titre</th>
//         <th>Email</th>
//         <th>Numéro de télépone</th>
//         <th>Fonction</th>
//         <th>Groupe</th>
        
    
//     </tr>
// </thead>
// <tbody>

// </tbody>
// </table>`
