declare type TBST = {
    baseHP: string;
    baseAtk: string;
    baseDef: string;
    baseSpa: string;
    baseSpd: string;
    baseSpeed: string;
};
declare type TBaseStats = {
    normal: TBST;
    alolan: TBST | null;
    galarian: TBST | null;
};
export declare type TMove = {
    moveName: string;
    moveAccuracy: string;
    moveEffectPct: string;
    movePower: string;
    movePowerPoints: string;
    moveType: string;
};
declare type TPokemon = {
    abilities: string[];
    baseStats: TBaseStats;
    dexNumber: string;
    forms: {
        form: string;
        types: string[];
    }[];
    imageSrc: string;
    moves: {
        [key: string]: string[];
    };
    name: string;
};
export declare type TOutput = {
    pokemon: {
        [key: string]: TPokemon;
    };
    moves: {
        [key: string]: TMove;
    };
    abilities: string[];
    _tempMoves?: {
        [key: string]: string[];
    };
};
export declare function App(): Promise<TOutput | undefined>;
export {};
//# sourceMappingURL=main.d.ts.map