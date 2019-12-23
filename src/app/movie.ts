export class Film {
    title: string;
    opening_crawl: string;
    director: string;
    producer: string;
    episode_id: number;
    planets: string;
    vehicles:  Array<string>;
    characters: string;
    url: string;
    release_date: string;
}

export class Vehicle {
    name: string;
    url: string;
}

export class Planet {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    url: string;
    created: Date;
    edited: Date;
}