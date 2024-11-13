const catUrl = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_MwoUpu2qF8hFkfdtT6EIlVhY9dhzkjxU6MMJLEzQ092NO9nq1yXO1di9dqdSJW0t{CAT_API_KEY}es=jpg&format=json&has_breeds=true&limit=10";
const dogUrl = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&limit=10"

export default function getAnimals() {
    let catResponse;
    let dogResponse;

    Promise.all([fetch(catUrl),fetch(dogUrl)])
    .then(([catRes,dogRes]) =>{
        return Promise.all([catRes.json(),dogRes.json()])
       })
    .then(([cat,dog])=>{
        const sec = document.createElement('section');
        sec.innerHTML =  `<ul>
                            <li id=${cat[0].id}>Cat ID IS: ${cat[0].id} </li>
                            <img src=${cat[0].url} width=160px> </img>

                            <li id=${dog[0].id}>Dog ID IS: ${dog[0].id} </li>
                            <img src=${dog[0].url} width=160px> </img>
                         </ul>`
        document.getElementById('root').appendChild(sec);

      console.log('the data is:',[cat,dog])
    })
    .catch((err)=>{console.error(err)})

  }
