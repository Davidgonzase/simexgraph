import { GraphQLError } from "graphql";
import { Character,Episode } from "../../types.ts";

const getCharacterURL = async (id:string):Promise<Character> => {
    try {
      const response = await fetch(
        id
      );
      if (response.status !== 200) {
        throw new Error;
      }
      const character: Character = await response.json();
      return character;
    } catch (error) {
      throw new GraphQLError(`No character found with id ${id}`, {
        extensions: { code: "NOT_FOUND_3" },
      });
    }
  };
  
  export default getCharacterURL;