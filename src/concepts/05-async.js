import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {
    
    const renderComponent = ( value ) => {
        element.innerHTML = value;
    }

    const id = '5d86371f25a058e5b1c8a65e';

    findHero( id )
        .then( ({name}) => renderComponent(name) );

}

const findHero = async( id ) => {
    const  hero = heroes.find( heros => heros.id === id);
    return hero;
}

const findHeroPrueba = ( id ) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find( Hero => Hero.id === id);
        if(hero){
            resolve(hero);
        }
        reject(`Id ${id} no encontrado`);
    })
}