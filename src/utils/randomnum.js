function getRandomPokemonId(){
   const number =  Math.floor(Math.random()*(1010-1+1))+1;
    // console.log(number)
    return number;
}

export default getRandomPokemonId;