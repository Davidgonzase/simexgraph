import { GraphQLError } from "graphql";
import { Character,Episode } from "../../types.ts";

const getCharacter = async (id:string):Promise<Character> => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (response.status !== 200) {
        console.log(response)
        throw new Error;
      }
  
      const character: Character = await response.json();
      return character;
    } catch (error) {
      throw new GraphQLError(`No character found with id ${id}`, {
        extensions: { code: "NOT_FOUND_1" },
      });
    }
  };
  
  export default getCharacter;