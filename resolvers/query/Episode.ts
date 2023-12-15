import { Character } from "../../types.ts";
import getCharacterURL from "./getCharacterURL.ts";

export const Episode = {
  characters: async (parent: any):Promise<Character[]>=> {
    return parent.characters=await parent.characters.map(async (i:any)=>{return await getCharacterURL(i)})   
  },
};