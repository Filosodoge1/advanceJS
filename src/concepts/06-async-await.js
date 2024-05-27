import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async ( element ) => {
    
    const renderAsyncAwait = ( value1, value2 ) => {
        element.innerHTML = `${value1} / ${value2}`;
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f233c9f2425f16916';

    // const hero1 = await findHero( id1 );
    // const hero2 = await findHero( id2 );

    const {name: name1} = await findHero( id1 );
    const {name: name2} = await findHero( id2 );
    
    renderAsyncAwait(name1, name2);
    // renderAsyncAwait(hero1.name, hero2.name);

}

const findHero = async( id ) => {
    const hero = heroes.find( hero => hero.id === id);
    if (!hero) {
        throw `hero with id ${ id } not found`;
    }
    return hero;
}