

require('dotenv').config();
console.log(process.env);



const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${CAT_API_KEY}`;
const dogUrl = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&limit=10";

export async function getData() {
  let root = document.getElementById("root");
  try {
    const url = new URL(catUrl);
    let response = await fetch(url);
    if(!response.ok) throw new Error('failed to get response from server,oh no!')
    const cats= await response.json();
    root.innerHTML = cats.map((cat) =>{
    // const breedsName = cat.breeds.length>0 ? cat.breeds[0].name:"unknow breeds";
      console.log( "the output is",cat.breeds);
      return `<setion>
                <ul>
                  <li id=${cat.id}>Cat ID IS: ${cat.id} </li>
                  <img src=${cat.url} width=160px> </img>
                </ul>
              </setion>`
    })
  }
  catch(error) {
    console.error(error);
  }
}




const cc = [{"breeds":[{"weight":{"imperial":"6 - 12","metric":"3 - 7"},
  "id":"beng",
  "name":"Bengal",
  "cfa_url":"http://cfa.org/Breeds/BreedsAB/Bengal.aspx",
  "vetstreet_url":"http://www.vetstreet.com/cats/bengal",
  "vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/bengal",
  "temperament":"Alert, Agile, Energetic, Demanding, Intelligent",
  "origin":"United States",
  "country_codes":"US","country_code":"US",
  "description":"Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
  "life_span":"12 - 15",
  "indoor":0,"lap":0,
  "adaptability":5,"affection_level":5,
  "child_friendly":4,"cat_friendly":4,
  "dog_friendly":5,"energy_level":5,"grooming":1,
  "health_issues":3,"intelligence":5,"shedding_level":3,"social_needs":5,"stranger_friendly":3,
  "vocalisation":5,"bidability":3,"experimental":0,"hairless":0,"natural":0,"rare":0,"rex":0,
  "suppressed_tail":0,"short_legs":0,
  "wikipedia_url":"https://en.wikipedia.org/wiki/Bengal_(cat)","hypoallergenic":1,
  "reference_image_id":"O3btzLlsO"}],
  "id":"8pCFG7gCV",
  "url":"https://cdn2.thecatapi.com/images/8pCFG7gCV.jpg","width":750,"height":937}]

// export function getData() {
//   console.log("getData function was called");
//   fetch(catUrl)
//   .then((response) => {
//     if(!response.ok) throw new Error("Failed to response")
//     return response.json() })
//   .then((result) => console.log(result))
//   .catch(error => console.error('error', error));

// }
