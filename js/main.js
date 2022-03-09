const team = [
{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
},
{
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
},
];

// console.log(team[0].name);

let cardContainer ;
let cardBody;
let myName;
let myImage;
let myRole;
for(let i = 0; i < team.length; i++){
    //CREO UN CONTENIRE CHE RACCHIUDA LA SINGOLA CARD
    cardContainer = document.createElement('div');
    cardContainer.classList.add('col-4' , 'card' , 'mb-5' , 'p-3');
    //creo il body delle card contenente nome e ruolo
    cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    myName = document.createElement('h5');
    myName.classList.add('card-title');
    myName.innerHTML = team[i].name;

    myRole = document.createElement('p');
    myRole.classList.add('card-text');
    myRole.innerHTML = team[i].role;
    // cardContainer.innerHTML = `${team[i].name} , ${team[i].role} , ${team[i].image}`; 
    console.log(team[i].name);
    console.log(team[i].role);
    console.log(team[i].image);

    cardBody.appendChild(myName);
    cardBody.appendChild(myRole);

    cardContainer.appendChild(cardBody);

    document.getElementById('my-card-container').appendChild(cardContainer);
}

