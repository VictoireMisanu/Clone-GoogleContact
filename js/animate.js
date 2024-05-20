const html = document.querySelector("html");
const burger = document.querySelector("svg[id = 'icoOpen']");
const contactIcon = document.querySelector(
  "img[src = 'images/contact_icon.png'"
);
const contactTitle = document.querySelector("a[ href = './index.html']");
const searchZone = document.querySelector("input[name = 'search']");
const searchIcon = document.querySelector("img[src = 'images/searchIcon.jpg']");
const header = document.querySelector("header");
const btnCreateContact = document.querySelector(
  "a[class = 'btnCreateContact']"
);
const btnContactList = document.querySelector("a[ class = 'btnContactList']");
const sideNav = document.querySelector("div[class = 'sidenav']");
// const allContacts = document.querySelector("div[class = 'allContacts']")
const mainSection = document.querySelector("main");
const divContact = document.querySelector("div[class = 'allContacts']");
const allLabels = document.querySelector("div[class = 'labelList']");
const numberOfContacts = document.querySelector("span");
contactNumber = document.querySelector(".contactNumber");
contact2Number = document.querySelector(".contact2Number");


if(contactNumber){}

const tabContacts = [];
const tabLabels = [];
const libelleContainer = document.createElement("select");

mainSection.classList.add("ordered");
searchIcon.classList.add("alignDimine");
burger.classList.add("alignDimine");
contactIcon.classList.add("alignDimine");
contactTitle.classList.add("bigger");
searchZone.classList.add("goodLooking");
searchZone.setAttribute("placeHolder", "Rechercher");
header.classList.add("centered");
btnCreateContact.classList.add("measureColorCreateContact");
btnContactList.classList.add("measureColorContactList");
// divContact.classList.add('')


burger.addEventListener("click", function () {
  if (sideNav.classList.contains("pushToTheLeftSide")) {
    sideNav.classList.remove("pushToTheLeftSide");
    divContact.classList.remove("takesTheWholePlace");
  } else {
    sideNav.classList.add("pushToTheLeftSide");
    divContact.classList.add("takesTheWholePlace");
    // mainSection.classList.remove('ordered')
  }
});
// création du contenu de la page ListContact

const table = document.createElement("table");
const thead = document.createElement("thead");
const tr1 = document.createElement("tr");
const tbody = document.createElement("tbody");
const th = document.createElement("th");
const th0 = document.createElement("th");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const td = document.createElement("td");

divContact.append(table);
table.append(thead);
table.append(tbody);
thead.append(tr1);

tr1.append(th0, th, th1, th2, th3, th4);
// console.log(tr)

table.classList.add("styleTable");
th.classList.add("styleBorder");
th0.classList.add("styleBorder")
th1.classList.add("styleBorder");
th2.classList.add("styleBorder");
th3.classList.add("styleBorder");
th4.classList.add("styleBorder");
//tbody.className = 'styleBorder'
th.textContent = "Titre";
th0.textContent = "Profil"
th1.textContent = "Email";
th2.textContent = "Numéro de télépone";
th3.textContent = "Fonction et entreprise";
th4.textContent = "groupe";

// Création du contenu de la page Création d'un contact

const divCreateContact = document.createElement("div");
divCreateContact.classList.add("styleCreateContact");
// divCreateContact.textContent = "Bonjour"
const divCreatetContactHeader = document.createElement("div");
const divCreateContactBody = document.createElement("form");

divCreateContactBody.classList.add("styleDivCreateContactBody");
divCreatetContactHeader.classList.add("styleDivCreateContactHeader");
// divCreateContact.append(divCreatetContactHeader)
divCreateContact.append(divCreatetContactHeader, divCreateContactBody);
const arrowContainer = document.createElement("a");
arrowContainer.classList.add("styleArrowContainer");
const leftArrow = document.createElement("img");
leftArrow.src = "./images/arrowLeft.png";
leftArrow.classList.add("alignDimine");
arrowContainer.append(leftArrow);
// divCreatetContactHeader.append(arrowContainer)
arrowContainer.addEventListener("click", function () {
  divCreateContact.remove();
  mainSection.append(divContact);
});

const btnEnregistrer = document.createElement("input");
btnEnregistrer.setAttribute("type", "submit");
btnEnregistrer.setAttribute("value", "Enregistrer");
btnEnregistrer.setAttribute("disabled", "true");
btnEnregistrer.classList.add("styleBtnEnregistrer");
divCreatetContactHeader.append(arrowContainer, btnEnregistrer);

const profilePic = document.createElement("img");
profilePic.src = "/images/Contact.png";
profilePic.classList.add("round");

const divInputPrenom = document.createElement("div");
const iconPerson = document.createElement("img");
iconPerson.src = "/images/bitcoin-icons--contacts-filled.png";
const inputPrenom = document.createElement("input");
inputPrenom.setAttribute("type", "text");
inputPrenom.setAttribute("placeHolder", "Prenom");
inputPrenom.setAttribute("required", "required");
divInputPrenom.classList.add("divInputPrenomDimension");
inputPrenom.classList.add("inputPrenomDimension");
iconPerson.classList.add("iconPersonDimension");
divInputPrenom.append(iconPerson, inputPrenom);

const divInputNom = document.createElement("div");
divInputNom.classList.add("divInputNomDimension");
const inputNom = document.createElement("input");
inputNom.setAttribute("type", "text");
inputNom.setAttribute("placeHolder", "Nom");
inputNom.setAttribute("required", "required");
inputNom.classList.add("inputNomDimension");
divInputNom.append(inputNom);

const divInputEse = document.createElement("div");
const iconEse = document.createElement("img");
iconEse.src = "/images/carbon--enterprise.png";
const inputEse = document.createElement("input");
inputEse.setAttribute("type", "text");
inputEse.setAttribute("placeHolder", "Entreprise");
inputEse.setAttribute("required", "required");
divInputEse.classList.add("divInputPrenomDimension");
inputEse.classList.add("inputPrenomDimension");
iconEse.classList.add("iconPersonDimension");
divInputEse.append(iconEse, inputEse);

const divInputFonction = document.createElement("div");
divInputFonction.classList.add("divInputNomDimension");
const inputFonction = document.createElement("input");
inputFonction.setAttribute("type", "text");
inputFonction.setAttribute("required", "required");
inputFonction.setAttribute("placeHolder", "Fonction");
inputFonction.classList.add("inputNomDimension");
divInputFonction.append(inputFonction);

const divInputEmail = document.createElement("div");
const iconEmail = document.createElement("img");
iconEmail.src = "/images/eva--email-outline.png";
const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("required", "required");
inputEmail.setAttribute("placeHolder", "Email");
inputEmail.setAttribute("disabled", "true");
divInputEmail.classList.add("divInputPrenomDimension");
inputEmail.classList.add("inputPrenomDimension");
iconEmail.classList.add("iconPersonDimension");
divInputEmail.append(iconEmail, inputEmail);

const divAddEmailAddress = document.createElement("div");
divAddEmailAddress.classList.add("divAddEmailAddressDimension");
const plusEmail = document.createElement("img");
plusEmail.src = "/images/plus.png";
plusEmail.classList.add("alignDimine");
const emailTextContent = document.createElement("p");
emailTextContent.textContent = "Ajouter une adresse Email";
divAddEmailAddress.append(plusEmail, emailTextContent);

const divPhoneNumber = document.createElement("div");
divPhoneNumber.classList.add("divInputPrenomDimension");
const flagContainer = document.createElement("select");
flagContainer.setAttribute("required", "required");
flagContainer.classList.add("btnFlagList");
const Flag0 = document.createElement("option");
const Flag1 = document.createElement("option");
const Flag2 = document.createElement("option");
const Flag3 = document.createElement("option");
const Flag4 = document.createElement("option");
Flag0.textContent = "+243";
Flag1.textContent = "+242";
Flag2.textContent = "+33";
Flag3.textContent = "+49";
Flag4.textContent = "+39";
Flag0.value = "+243";
Flag1.value = "+242";
Flag2.value = "+33";
Flag3.value = "+49";
Flag4.value = "+39";
flagContainer.append(Flag0, Flag1, Flag2, Flag3, Flag4);
const inputPhoneNumber = document.createElement("input");
inputPhoneNumber.setAttribute("type", "phone");
inputPhoneNumber.setAttribute("placeHolder", "Téléphone");
inputPhoneNumber.classList.add("inputPrenomDimension");
const phoneIcon = document.createElement("img");
phoneIcon.src = "/images/ic--round-phone.png";
phoneIcon.classList.add("alignDimine");
divPhoneNumber.append(phoneIcon, flagContainer, inputPhoneNumber);

divCreateContactBody.append(
  profilePic,
  libelleContainer,
  divInputPrenom,
  divInputNom,
  divInputEse,
  divInputFonction,
  divInputEmail,
  divAddEmailAddress,
  divPhoneNumber
);

divAddEmailAddress.addEventListener("click", function () {
  inputEmail.removeAttribute("disabled");
  inputEmail.select();
});

inputPrenom.classList.add("inputselected");
inputNom.classList.add("inputselected");
inputEse.classList.add("inputselected");
inputFonction.classList.add("inputselected");
inputEmail.classList.add("inputselected");
inputPhoneNumber.classList.add("inputselected");

btnCreateContact.addEventListener("click", function () {
  divContact.remove();
  mainSection.append(divCreateContact);

  const allInput = document.querySelectorAll(".inputselected");

  //console.log(allInput)
  function switchStateBtnEnreg() {
    allInput.forEach((input) => {
      input.addEventListener("input", function () {
        if (
          inputPrenom.value == "" ||
          inputNom.value == "" ||
          inputEmail.value == "" ||
          inputPhoneNumber.value == ""
        ) {
          //console.log("les inputs sont vides")
          btnEnregistrer.setAttribute("disabled", "disabled");
        } else {
          btnEnregistrer.removeAttribute("disabled", "disabled");
          //console.log("les inputs ne sont pas vides")
        }
      });
    });
  }

  switchStateBtnEnreg();

  btnEnregistrer.addEventListener("click", function () {
    const contactInfo = {
      libelle: libelleContainer.value,

      prenom: inputPrenom.value,
      nom: inputNom.value,
      Entreprise: inputEse.value,
      Fonction: inputFonction.value,
      Email: inputEmail.value,
      PhoneNumber: inputPhoneNumber.value
    };
    tabContacts.push(contactInfo);
   
    
    showContacts(tabContacts);
    showLabels();
  });
});

btnContactList.addEventListener("click", function () {
  divCreateContact.remove();
  mainSection.append(divContact);
  showContacts(tabContacts)
});

function showContacts(contacts) {
  tbody.innerHTML = "";
  contacts.forEach((Contact) => {
    let tr2 = document.createElement("tr");
    const td0 = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const profilePhoto = document.createElement('img')
    profilePhoto.src = '/images/Contact.png'
    profilePhoto.classList.add('smaller')
    td0.appendChild(profilePhoto)
    td1.classList.add('bold')

  const divDeleteModify = document.createElement('div')
  const btnDelete = document.createElement('img')
  const btnModify = document.createElement('img')
  btnDelete.src = '/images/material-symbols-light--delete-outline.png'
  btnModify.src = '/images/mdi--pencil.png'

  btnDelete.classList.add('labelName')
  btnModify.classList.add('labelName')

  divDeleteModify.append(btnDelete, btnModify)
  divDeleteModify.classList.add('styleDivDeleteModify')

  tr2.addEventListener('mouseover', function(){
    divDeleteModify.classList.remove('styleDivDeleteModify')
    divDeleteModify.classList.add('newStyleDivDeleteModify')
    tr2.classList.add('newStyleTr')
  })
  tr2.addEventListener('mouseout', function(){
    divDeleteModify.classList.add('styleDivDeleteModify')
    divDeleteModify.classList.remove('newStyleDivDeleteModify')
    tr2.classList.remove('newStyleTr')
  })
  
  // btnDelete.forEach(function(contact){
  //   contact.addEventListener('cilck', function(){
  //     const tr2 = this.closest('tr');
  //     const td0 = tr2.querySelector('td:nth-child(0)').textContent
  //     const td1 = tr2.querySelector('td:nth-child(1)').textContent
  //     const td2 = tr2.querySelector('td:nth-child(2)').textContent
  //     const td3 = tr2.querySelector('td:nth-child(3)').textContent
  //     const td4 = tr2.querySelector('td:nth-child(4)').textContent
  //     const td5 = tr2.querySelector('td:nth-child(5)').textContent

      
  //   })
  // })
  btnDelete.addEventListener('click', function(){
    const confirmationDeletion = confirm('voulez-vous vraiment supprimer ce contact?')
    const tr2 = this.closest('tr')
    if(confirmationDeletion){
      tr2.remove()


      contactNumber.textContent = tabContacts.length;
      contact2Number.textContent = tabContacts.length;
    
    }
   
  })
  btnModify.addEventListener('click', function(){

  })

    td1.textContent = Contact.prenom + " " + Contact.nom;
    td2.textContent = Contact.Email;
    td3.textContent = flagContainer.value + Contact.PhoneNumber;
    td4.textContent = Contact.Entreprise + " " + Contact.Fonction;
    td5.textContent = Contact.libelle;
    
    tr2.append(td0, td1, td2, td3, td4, td5, divDeleteModify);

    tbody.appendChild(tr2);
    tr2.classList.add("styleBorder");
    tr2.classList.add("lignes");
    contactNumber.textContent = tabContacts.length;
    contact2Number.textContent = tabContacts.length;
    
    //console.log(tabContacts.length)
    //console.log(contact2Number.textContent)
  });
  eventClick();
}

numberOfContacts.classList.add("bigger");

const plusLibelle = document.querySelector("svg[class = 'plusLibelle']");
const createLabelContainer = document.createElement("div");
createLabelContainer.classList.add("createLabelContainer");
plusLibelle.addEventListener("click", function () {
  html.prepend(createLabelContainer);
  createLabelContainer.classList.remove("close");
});
// console.log(plusLibelle)
// plusLibelle.src = '/images/plus.png'
// plusLibelle.classList.add('alignDimine')
// const libelleTextContent = document.createElement('p')

const formCreateLabel = document.createElement("form");
formCreateLabel.classList.add("styleFormCreateLabel");
createLabelContainer.append(formCreateLabel);
const formLabelTitle = document.createElement("p");
formLabelTitle.textContent = "Créer un libellé";
formLabelTitle.classList.add("normalized");
const inputFormCreateLabel = document.createElement("input");
inputFormCreateLabel.setAttribute("type", "text");
inputFormCreateLabel.setAttribute("required", "required");
inputFormCreateLabel.setAttribute("id", "inputFormLabelId");
inputFormCreateLabel.classList.add("styleInputFormCreatelabel");
const btnShut = document.createElement("button");
const btnCreateLabel = document.createElement("button");
btnShut.textContent = "Non, ne rien faire";
btnShut.classList.add("styleBtnLabel");
btnCreateLabel.classList.add("styleBtnLabel");
btnCreateLabel.textContent = "Enregistrer";
const divFormLabelBtnContainer = document.createElement("div");
divFormLabelBtnContainer.classList.add("styleLabelBtnContainer");
divFormLabelBtnContainer.append(btnShut, btnCreateLabel);
const labelInInput = document.createElement("label");
labelInInput.textContent = "Nouveau libellé";
labelInInput.setAttribute('for', 'inputFormLabelId');
labelInInput.classList.add("styleLabelInInput");

formCreateLabel.append(
  formLabelTitle,
  inputFormCreateLabel,
  divFormLabelBtnContainer,
  labelInInput
);

inputFormCreateLabel.addEventListener("focus", function () {
  labelInInput.classList.remove("styleLabelInInput");
  labelInInput.classList.add("newStyleLabelInInput");
});
inputFormCreateLabel.addEventListener("blur", function () {
  if (inputFormCreateLabel.value == "") {
    labelInInput.classList.remove("newStyleLabelInInput");
    labelInInput.classList.add("styleLabelInInput");
  } else {
    labelInInput.classList.add("newStyleLabelInInput");
    labelInInput.classList.remove("styleLabelInInput");
  }
});

btnShut.addEventListener("click", function () {
  createLabelContainer.classList.add("close");
});

createLabelContainer.addEventListener("click", function (event) {
    if(event.target == createLabelContainer)
    createLabelContainer.classList.add("close");
});

btnCreateLabel.addEventListener("click", function () {
  //formCreateLabel.preventDefault()
  const labelContainer = document.createElement("div");
  const labelLogo = document.createElement("img");
  const labelName = document.createElement("a");
  labelName.className = "labelName";
  const labelNumber = document.createElement("small");
  labelNumber.textContent = "0";

  labelLogo.src = "/images/material-symbols-light--label.png";

  labelContainer.classList.add("labels");

  // <a href="#" class="labels"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="black" d="m20 12l-4.238 6H4V6h11.723z"/></svg>Eglise <small>0</small></a>
  // console.log(inputFormCreateLabel.value)
  labelName.textContent = inputFormCreateLabel.value;
  labelContainer.append(labelLogo, labelName, labelNumber);
  
  labelContainer.addEventListener("click", (event)=>{
    const tabLabelsContact = tabContacts.filter(contact => contact.libelle == labelName.textContent)
    divCreateContact.remove();
    mainSection.append(divContact);
    showContacts(tabLabelsContact);
  })
  tabLabels.push(labelContainer);
  fillLabelListDropDown(tabLabels)
  // allLabels.append(labelContainer)
  showLabels();
  createLabelContainer.classList.add("close");
});

function showLabels() {
  tabLabels.forEach((labelContainer) => {
    const labelNumberView = labelContainer.querySelector('small')
    const labelNameView = labelContainer.querySelector('.labelName')
    const tabLabelsContact = tabContacts.filter(contact => contact.libelle == labelNameView.textContent)
    labelNumberView.textContent = tabLabelsContact.length
    allLabels.append(labelContainer);
    //console.log(labelContainer);
    //console.log(tabLabels)
    //console.log(tabContacts.length)
    //console.log(contact2Number.textContent)
  });
}

libelleContainer.classList.add("btnAddLibelle");
// remplir le dropdown des labels

function fillLabelListDropDown(labels){
  libelleContainer.innerHTML= ""
  labels.forEach(label => {
    const labelView = document.createElement('option')
    labelView.textContent = label.querySelector('.labelName').textContent
    labelView.value = label.querySelector('.labelName').textContent
    libelleContainer.appendChild(labelView)
  })
}

function eventClick(){
   let  allRowsContact = document.querySelectorAll('.lignes');
    allRowsContact.forEach(function(allRow){
           allRow.addEventListener('click',function(){
               alert(allRow.rowIndex);
           })
    })
}