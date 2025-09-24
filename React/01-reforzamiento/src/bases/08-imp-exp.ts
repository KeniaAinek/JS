import { heroes, type Hero, Owner } from '../data/heroes.data';
export { type Hero, Owner };

const getHeroById = (id: number): Hero|undefined => {
    const hero = heroes.find((hero) =>  {
        return hero.id === id;
    });

    if ( !hero ){
        throw new Error(`No existe un héroe con el id ${ id }`);
    }

    return hero;
};

// console.log(getHeroById(3));

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const heroesByOwner = heroes.filter((hero) => {
        return hero.owner === owner;
    });

    if ( !owner ){
        throw new Error(`No existe un Owner con el valor ${ owner }`);
    }

    return heroesByOwner;
};