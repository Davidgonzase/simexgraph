import { GraphQLError } from "graphql";
import { Character,Episode } from "../../types.ts";

const getepisode = async (id:string):Promise<Episode> => {
    try {
        const response = await fetch(id);
        if (response.status !== 200) {
          throw new Error(`Episode ${id} not found`);
        }
        const episodeData:Episode = await response.json();
        return episodeData;
    } catch (error) {
      throw new GraphQLError(`No episode found with id ${id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
  };
  
  export default getepisode;