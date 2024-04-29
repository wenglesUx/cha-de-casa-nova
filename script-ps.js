import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDLv5Kik57zsSFjcOZByy8aqsZHdKUt8uo",
    authDomain: "lista-de-presentes-ff7f9.firebaseapp.com",
    databaseURL: "https://lista-de-presentes-ff7f9-default-rtdb.firebaseio.com",
    projectId: "lista-de-presentes-ff7f9",
    storageBucket: "lista-de-presentes-ff7f9.appspot.com",
    messagingSenderId: "527502996022",
    appId: "1:527502996022:web:7a84e19fd64727fe861e97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function resetDatabase() {
    const presentesCollectionRef = collection(db, 'presentes');
    const presentesSnapshot = await getDocs(presentesCollectionRef);

    presentesSnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
    });

    console.log('Banco de dados resetado com sucesso!');
}

// Chame a função resetDatabase() para resetar o banco de dados
resetDatabase();

async function loadItems() {
    presentes.forEach((itemList) => {
        const categoryTitle = itemList[0].titulo;

        const container = document.createElement('div');
        container.setAttribute("class","listArea")
        container.innerHTML = `<h2>${categoryTitle}</h2>`;

        const list = document.createElement('ul');

        itemList.forEach(async (item) => {
            const docRef = doc(db, "presentes", `${item.id}`);
            const docSnap = await getDoc(docRef);

            const listItem = document.createElement('li');
            listItem.textContent = `${item.item}`;
            list.appendChild(listItem);

            if (docSnap.exists() && !docSnap.data().disponivel) {
                listItem.classList.add('item-disabled');
            } else {
                listItem.addEventListener('click', async () => {
                    
                    document.querySelector('.modal').style.display = 'block';
                    document.querySelector('.overlay').style.display = 'block';
                    document.querySelector('.item-img img').src = item.img;
                    document.querySelector('.item-name').innerHTML = item.item;
                    // Rola até a div modal
                    const modal = document.querySelector('.modal');
                    modal.scrollIntoView({ behavior: 'smooth' });

                    
                    document.querySelector('.gift').addEventListener('click', async () => {
                       
                        
                        const message = `Olá, eu escolhi te presentear com ${item.item}.`;

                        const phoneNumber = '556182103445'; // Número de telefone do WhatsApp

                        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                        window.open(whatsappLink);

                        // Desabilita o item clicado
                        listItem.classList.add('item-disabled');
                        
                        // Atualiza o Firebase apenas para o item clicado
                        await setDoc(docRef, {
                            ...item,
                            disponivel: false
                        });
                        location.reload()
                        
                    });
                });
            }

            function closeModal() {
                document.querySelector('.overlay').style.display = 'none';
                document.querySelector('.modal').style.display = 'none';
                document.querySelector('.item-img img').src = "";
                document.querySelector('.item-name').innerHTML = "";
            }

            document.querySelector('.close-modal').addEventListener('click', closeModal);
        });

        container.appendChild(list);
        document.body.appendChild(container);
    });
}

loadItems();
document.querySelector('details').style.transition = ".5s linear"
const copyArea = document.getElementById('codigo')
const copyPix = document.getElementById('ccg')
const messageSpan = document.querySelector('#codigo span')

copyArea.addEventListener('click',()=>{
    const codigo  = copyPix.innerHTML
    const tempText = document.createElement('textarea');
    tempText.value = codigo;
    document.body.appendChild(tempText);
    tempText.select();
    document.execCommand('copy')
    document.body.removeChild(tempText);
    messageSpan.classList.add('spanCDactive')
    document.querySelector('.bi-copy').style.color = "#7bb27e"
})

