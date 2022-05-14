import { isJSDocTypeExpression } from "typescript";

export interface Duck {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void
}

const duck1 = {
    name: "joey",
    numLegs: 2,
    makeSound : (sound: string) => console.log(sound)
}


const duck2 = {
    name: "chandler",
    numLegs: 2,
    makeSound : (sound: string) => console.log(sound)
}

export const ducks = [duck1, duck2];