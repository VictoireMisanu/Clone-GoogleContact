const burger = document.querySelector("svg[id = 'icoOpen']")
const contactIcon = document.querySelector("img[src = 'images/contact_icon.png'")
const contactTitle = document.querySelector("a[ href = './index.html']")
const searchZone = document.querySelector("input[name = 'search']")
const searchIcon = document.querySelector("img[src = 'images/searchIcon.jpg']")
const header = document.querySelector("header")
const btnCreateContact = document.querySelector("a[class = 'btnCreateContact']")
const btnContactList = document.querySelector("a[ class = 'btnContactList']")
const sideNav = document.querySelector("div[class = 'sidenav']")
// const allContacts = document.querySelector("div[class = 'allContacts']")
const mainSection = document.querySelector("main")
const divContact = document.querySelector("div[class = 'allContacts']")

// console.log(divContact)


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
        divContact.classList.remove('takesTheWholePlace')
    }
    else{
        sideNav.classList.add('pushToTheLeftSide')
        divContact.classList.add('takesTheWholePlace')
        // mainSection.classList.remove('ordered')
    }
})
// création du contenu de la page ListContact

const table = document.createElement('table');
const thead = document.createElement('thead')
const tr1 = document.createElement('tr')
const tr2 = document.createElement('tr')
const tbody = document.createElement('tbody')
const th = document.createElement('th')
const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')
const th4 = document.createElement('th')
const td = document.createElement('td')

divContact.append(table)
table.append(thead)
table.append(tbody)
thead.append(tr1)

tr1.append(th,th1,th2,th3, th4)
// console.log(tr)



table.className = 'styleTable'
th.className = 'styleBorder'
th1.className = 'styleBorder'
th2.className = 'styleBorder'
th3.className = 'styleBorder'
th4.className = 'styleBorder'
th.textContent = 'Titre'
th1.textContent = 'Email'
th2.textContent = 'Numéro de télépone'
th3.textContent = 'Fonction et entreprise'
th4.textContent = 'groupe'


// Création du contenu de la page Création d'un contact

const divCreateContact = document.createElement('div')
divCreateContact.classList.add('styleCreateContact')
// divCreateContact.textContent = "Bonjour"
const divCreatetContactHeader = document.createElement('div')
const divCreateContactBody = document.createElement('form')

divCreateContactBody.classList.add('styleDivCreateContactBody')
divCreatetContactHeader.classList.add('styleDivCreateContactHeader')
// divCreateContact.append(divCreatetContactHeader)
divCreateContact.append(divCreatetContactHeader,divCreateContactBody)
const arrowContainer = document.createElement('a')
const leftArrow = document.createElement('img')
leftArrow.src = './images/arrowLeft.png'
leftArrow.classList.add('alignDimine')
arrowContainer.append(leftArrow)
// divCreatetContactHeader.append(arrowContainer)
arrowContainer.addEventListener("click", function (){
    divCreateContact.remove()
    mainSection.append(divContact)
})

const btnEnregistrer = document.createElement('input')
btnEnregistrer.setAttribute("type","submit")
btnEnregistrer.setAttribute("value","Enregistrer")
btnEnregistrer.setAttribute("disabled","true")
btnEnregistrer.classList.add('styleBtnEnregistrer')
divCreatetContactHeader.append(arrowContainer,btnEnregistrer)

const profilePic = document.createElement('img')
profilePic.src = '/images/Contact.png'
profilePic.classList.add('round')

const libelleContainer = document.createElement('select')
// libelleContainer.setAttribute("required", "required")
libelleContainer.classList.add('btnAddLibelle')
const Libelle0 = document.createElement('option')
const Libelle1 = document.createElement('option')
const Libelle2 = document.createElement('option')
const Libelle3 = document.createElement('option')
// const plusLibelle = document.createElement('img')
// plusLibelle.src = '/images/plus.png'
// plusLibelle.classList.add('alignDimine')
// const libelleTextContent = document.createElement('p')
Libelle0.textContent = 'Libellé'
Libelle1.textContent = 'Famille'
Libelle2.textContent = 'Bureau'
Libelle3.textContent = 'Amis'
Libelle0.value = '0'
Libelle1.value = 'Famille'
Libelle2.value = 'Bureau'
Libelle1.value = 'Amis'
libelleContainer.append(Libelle0, Libelle1, Libelle2, Libelle3)

const divInputPrenom = document.createElement('div')
const iconPerson = document.createElement('img')
iconPerson.src = '/images/bitcoin-icons--contacts-filled.png'
const inputPrenom = document.createElement('input')
inputPrenom.setAttribute('type','text')
inputPrenom.setAttribute('placeHolder', 'Prenom')
// inputPrenom.setAttribute('required', 'required')
divInputPrenom.classList.add('divInputPrenomDimension')
inputPrenom.classList.add('inputPrenomDimension')
iconPerson.classList.add('iconPersonDimension')
divInputPrenom.append(iconPerson, inputPrenom)

const divInputNom = document.createElement('div')
divInputNom.classList.add('divInputNomDimension')
const inputNom = document.createElement('input')
inputNom.setAttribute('type','text')
inputNom.setAttribute('placeHolder', 'Nom')
// inputNom.setAttribute('required', 'required')
inputNom.classList.add('inputNomDimension')
divInputNom.append(inputNom)

const divInputEse = document.createElement('div')
const iconEse = document.createElement('img')
iconEse.src = '/images/carbon--enterprise.png'
const inputEse = document.createElement('input')
inputEse.setAttribute('type','text')
inputEse.setAttribute('placeHolder', 'Entreprise')
// inputEse.setAttribute('required', 'required')
divInputEse.classList.add('divInputPrenomDimension')
inputEse.classList.add('inputPrenomDimension')
iconEse.classList.add('iconPersonDimension')
divInputEse.append(iconEse, inputEse)

const divInputFonction = document.createElement('div')
divInputFonction.classList.add('divInputNomDimension')
const inputFonction = document.createElement('input')
inputFonction.setAttribute('type','text')
// inputFonction.setAttribute('required', 'required')
inputFonction.setAttribute('placeHolder', 'Fonction')
inputFonction.classList.add('inputNomDimension')
divInputFonction.append(inputFonction)

const divInputEmail = document.createElement('div')
const iconEmail = document.createElement('img')
iconEmail.src = '/images/eva--email-outline.png'
const inputEmail = document.createElement('input')
inputEmail.setAttribute('type','email')
// inputEmail.setAttribute('required', 'required')
inputEmail.setAttribute('placeHolder', 'Email')
inputEmail.setAttribute('disabled', 'true')
divInputEmail.classList.add('divInputPrenomDimension')
inputEmail.classList.add('inputPrenomDimension')
iconEmail.classList.add('iconPersonDimension')
divInputEmail.append(iconEmail, inputEmail)

const divAddEmailAddress = document.createElement('div')
divAddEmailAddress.classList.add('divAddEmailAddressDimension')
const plusEmail = document.createElement('img')
plusEmail.src = '/images/plus.png'
plusEmail.classList.add('alignDimine')
const emailTextContent = document.createElement('p')
emailTextContent.textContent = 'Ajouter une adresse Email'
divAddEmailAddress.append(plusEmail, emailTextContent)

const divPhoneNumber = document.createElement('div')
divPhoneNumber.classList.add('divInputPrenomDimension')
const flagContainer = document.createElement('select')
// flagContainer.setAttribute('required', 'required')
flagContainer.classList.add('btnFlagList')
const Flag0 = document.createElement('option')
const Flag1 = document.createElement('option')
const Flag2 = document.createElement('option')
const Flag3 = document.createElement('option')
const Flag4 = document.createElement('option')
Flag0.textContent = '+243'
Flag1.textContent = '+242'
Flag2.textContent = '+33'
Flag3.textContent = '+49'
Flag4.textContent = '+39'
Flag0.value = '+243'
Flag1.value = '+242'
Flag2.value = '+33'
Flag3.value = '+49'
Flag4.value = '+39'
flagContainer.append(Flag0, Flag1, Flag2, Flag3, Flag4)
const inputPhoneNumber = document.createElement('input')
inputPhoneNumber.setAttribute('type', 'phone')
inputPhoneNumber.setAttribute('placeHolder', 'Téléphone')
inputPhoneNumber.classList.add('inputPrenomDimension')
const phoneIcon = document.createElement('img')
phoneIcon.src = '/images/ic--round-phone.png'
phoneIcon.classList.add('alignDimine')
divPhoneNumber.append(phoneIcon, flagContainer, inputPhoneNumber)

divCreateContactBody.append(profilePic, libelleContainer, divInputPrenom, divInputNom, divInputEse, divInputFonction, divInputEmail, divAddEmailAddress, divPhoneNumber)

divAddEmailAddress.addEventListener('click', function(){
    inputEmail.removeAttribute('disabled')
    inputEmail.select()
})

inputPrenom.classList.add('inputselected')
inputNom.classList.add('inputselected')
inputEse.classList.add('inputselected')
inputFonction.classList.add('inputselected')
inputEmail.classList.add('inputselected')
inputPhoneNumber.classList.add('inputselected')



btnCreateContact.addEventListener("click", function (){

    divContact.remove()
    mainSection.append(divCreateContact)

    const allInput = document.querySelectorAll('.inputselected')

console.log(allInput)
function switchStateBtnEnreg(){
    allInput.forEach(input =>{
        input.addEventListener('input', function(){
            if(inputPrenom.value == "" || inputNom.value == "" || inputEmail.value == "" || inputPhoneNumber.value == ""){
                console.log("les inputs sont vides")
                btnEnregistrer.setAttribute('disabled', 'disabled')
            }
            else{
                btnEnregistrer.removeAttribute('disabled', 'disabled')
                console.log("les inputs ne sont pas vides")
            }
        })
    })
}

switchStateBtnEnreg()
const tabContacts = []

btnEnregistrer.addEventListener('click', function(){
        
        const contactInfo = {
            libelle:libelleContainer.value,
            prenom: inputPrenom.value,
            nom: inputNom.value,
            Entreprise: inputEse.value,
            Fonction: inputFonction.value,
            Email: inputEmail.value,
            PhoneNumber: inputPhoneNumber.value
        }
        tabContacts.push(contactInfo)
        showContacts()
    }
)

function showContacts(){
    tabContacts.forEach(Contact => {
        tr2.innerHTML = `<td>`+Contact.libelle+`</td>
        <td>`+Contact.prenom+`</td>
        <td>`+Contact.nom+`</td>
        <td>`+Contact.Entreprise+`</td>
        <td>`+Contact.Fonction+`</td>
        <td>`+Contact.Email+`</td>
        <td>`+Contact.PhoneNumber+`</td>`

        tbody.append(tr2)
    })
}


})

btnContactList.addEventListener("click", function (){
    divCreateContact.remove()
    mainSection.append(divContact)
})
