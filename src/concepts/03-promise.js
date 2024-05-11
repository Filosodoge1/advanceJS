import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    
    const id = `5d86371f1efebc31def272e2`;



}

const finHero = ( id ) =>{

    const Promise = new Promise( (resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Heroe with id ${id} not found`);

    });

    return Promise;

}