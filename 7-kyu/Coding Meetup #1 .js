//You will be given an array of objects (hashes in ruby) representing data about developers
//who have signed up to attend the coding meetup that you are organising for the first time.

//Your task is to return the number of JavaScript developers coming from Europe.

/*var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
*/

//My solution

function countDevelopers(list) {
  let count=0;
  for(let i = 0; i < list.length; i++){
    if(list[i].continent === "Europe" && list[i].language ==="JavaScript"){
      count ++
    }
  } return count;
}
