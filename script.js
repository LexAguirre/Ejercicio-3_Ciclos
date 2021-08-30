"use strict";

export default class Cycle{
    constructor(S, E){
        this.S = S;
        this.E = E;
    }

    ecuacionS(){
        let s = 4;

        for(let i = 3; i <= this.S; i = i + 2){
            s = s - this.resolusion(i);
        }

        return (`S = ${s}`);
    }

    resolusion(dividendo){
        let formula = 4 / dividendo;
        return formula;
    }
    
}



