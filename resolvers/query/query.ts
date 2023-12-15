import { Character,Episode } from "../../types.ts";
import getCharacter from "./getCharacter.ts";
import getCharacters from "./getCharacters.ts";

export const Query ={
    character: async (_: unknown, args: { id: string }):Promise<Character> => {
        return getCharacter(args.id);
    },
    charactersByIds: async (_: unknown, args: { id: string[]}):Promise<Character[]> => {
        return getCharacters(args.id);;
    }
};