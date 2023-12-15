import { GraphQLError } from "graphql";
import { Character,Episode } from "../../types.ts";
import getCharacter from "./getCharacter.ts";

const getCharacters = async (id:string[]):Promise<Character[]> => {
    try {
      const res:Character[]=[];
      id.forEach(async (i) => {
        res.push(await getCharacter(i));
      }) 
      return res;
    } catch (error) {
      throw new GraphQLError(`No character found with id ${id}`, {
        extensions: { code: "NOT_FOUND_2" },
      });
    }
  };
  
  export default getCharacters;