import { searchHeroAsync, searchHero } from './promises';

const heroesIDs = ['cap', 'iron', 'spider'];

export const getArrayHeroes = async () => {
  return await Promise.all(heroesIDs.map(searchHero));
};

export const getHeroAwait = async id => {
  try {
    const hero = await searchHeroAsync(id);
    return hero;
  } catch (error) {
    throw error;
  }
};