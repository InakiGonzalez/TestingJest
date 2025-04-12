interface ISuperHero {
    name: string;
    power: string[];
}

export function getFlyingSuperHeros(superHeros: ISuperHero[]): ISuperHero[] {
    return superHeros.filter((superHero) => superHero.power.includes("Fly"));
}
  