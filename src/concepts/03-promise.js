import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const rendertwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3> ${ hero1.name } / ${ hero2.name }</h3>
        `;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h3>${ error }</h3>
        `;
    }

    const id = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    let hero1;
    
    // Forma 2 Cadena de Promesas
    // findHero(id)
    //     .then( (hero) => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then((hero2) => {
    //             rendertwoHeroes(hero1, hero2);
    //     }).catch( heroError => renderError(heroError));

    //Forma 1 Cadena de Promesas
    // findHero( id )
    //     .then( (hero1) => {
    //         findHero( id2 )
    //             .then( (hero2) => {
    //                 rendertwoHeroes(hero1, hero2);
    //             })
    //             .catch( heroeError => renderError( heroeError));
    //     })
    //     .catch(heroeError => renderError(heroeError))

    // }

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) =>{

    return new Promise( (resolve, reject) => {
        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Heroe with id ${id} not found`);

    });

}