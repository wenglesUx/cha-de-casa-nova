// menu
let menuArea = document.querySelector('.btn-menu-icon');
let menuContent = document.querySelector('.navbar');
menuArea.addEventListener('click',()=>{

    menuContent.classList.toggle('desactive')
    if(menuContent.classList.contains('desactive')){
        document.querySelector('.line-menu-fs').style.marginRight = '0'
        document.querySelector('.line-menu-tr').style.marginLeft = '0'
    }
    else{
        document.querySelector('.line-menu-fs').style.marginRight = '15px'
        document.querySelector('.line-menu-tr').style.marginLeft = '15px'
    }
})

const cards = document.querySelectorAll('.cards-item')

cards.forEach((item,index)=>{
    cards[0].style.background='#b7687b'
    cards[0].querySelector('i').style.color='white'
    cards[0].querySelector('h5').style.color='white'
    cards[0].querySelector('hr').style.background='white'
    cards[0].querySelectorAll('p').forEach((item)=>{
        item.style.color='white'
    })
    item.style.transition= '.3s ease-in-out'

  
    
    function mouseover(){
        
       if(index === 1 || index ===2){
        cards[0].style.background=''
        cards[0].querySelector('i').style.color=''
        cards[0].querySelector('h5').style.color=''
        cards[0].querySelector('hr').style.background=''
        cards[0].querySelectorAll('p').forEach((item)=>{
            item.style.color=''
        })
    
       }
      
    }
    function mouseout(){
      
        cards[0].style.background='#b7687b'
        cards[0].querySelector('i').style.color='white'
        cards[0].querySelector('h5').style.color='white'
        cards[0].querySelector('hr').style.background='white'
        cards[0].querySelectorAll('p').forEach((item)=>{
            item.style.color='white'
        })
           

    }
    
    item.addEventListener('mouseenter',mouseover)
    item.addEventListener('mouseleave',mouseout)

})
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const holidays = "20 july 2024";

function countdown(){
    const holidaysDate = new Date(holidays);
    const currentDate = new Date();
    const totalSeconds = (holidaysDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds)% 60
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
   

} 
function formatTime(time){
    return time < 10 ? `0${time}`: time
}

countdown()
setInterval(countdown,1000)

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyDLv5Kik57zsSFjcOZByy8aqsZHdKUt8uo",
//     authDomain: "lista-de-presentes-ff7f9.firebaseapp.com",
//     databaseURL: "https://lista-de-presentes-ff7f9-default-rtdb.firebaseio.com",
//     projectId: "lista-de-presentes-ff7f9",
//     storageBucket: "lista-de-presentes-ff7f9.appspot.com",
//     messagingSenderId: "527502996022",
//     appId: "1:527502996022:web:7a84e19fd64727fe861e97"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function resetDatabase() {
//     const presentesCollectionRef = collection(db, 'presentes');
//     const presentesSnapshot = await getDocs(presentesCollectionRef);

//     presentesSnapshot.forEach(async (doc) => {
//         await deleteDoc(doc.ref);
//     });

//     console.log('Banco de dados resetado com sucesso!');
// }

// // Chame a função resetDatabase() para resetar o banco de dados
// resetDatabase();

// async function loadItems() {
//     presentes.forEach((itemList) => {
//         const categoryTitle = itemList[0].titulo;

//         const container = document.createElement('div');
//         container.innerHTML = `<h2>${categoryTitle}</h2>`;

//         const list = document.createElement('ul');

//         itemList.forEach(async (item) => {
//             const docRef = doc(db, "presentes", `${item.id}`);
//             const docSnap = await getDoc(docRef);

//             const listItem = document.createElement('li');
//             listItem.textContent = `${item.item}`;
//             list.appendChild(listItem);

//             if (docSnap.exists() && !docSnap.data().disponivel) {
//                 listItem.classList.add('item-disabled');
//             } else {
//                 listItem.addEventListener('click', async () => {
//                     document.querySelector('.modal').style.display = 'block';
//                     document.querySelector('.item-img img').src = item.img;
//                     document.querySelector('.item-name').innerHTML = item.item;

//                     // Desabilita o item clicado
//                     listItem.classList.add('item-disabled');
                    
//                     // Atualiza o Firebase apenas para o item clicado
//                     await setDoc(docRef, {
//                         ...item,
//                         disponivel: false
//                     });

//                     document.querySelector('.gift').addEventListener('click', async () => {
                       

//                         const message = `Olá, eu escolhi te presentear com ${item.item}.`;

//                         const phoneNumber = '556182103445'; // Número de telefone do WhatsApp

//                         const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//                         window.open(whatsappLink, '_blank');

//                         // Desabilita o item clicado
//                         listItem.classList.add('item-disabled');

//                         // Atualiza o Firebase apenas para o item clicado
//                         await setDoc(docRef, {
//                             ...item,
//                             disponivel: false
//                         });
//                     });
//                 });
//             }

//             function closeModal() {
//                 document.querySelector('.modal').style.display = 'none';
//                 document.querySelector('.item-img img').src = "";
//                 document.querySelector('.item-name').innerHTML = "";
//             }

//             document.querySelector('.close-modal').addEventListener('click', closeModal);
//         });

//         container.appendChild(list);
//         document.body.appendChild(container);
//     });
// }

// loadItems();