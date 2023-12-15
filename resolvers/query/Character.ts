import getepisode from "./getepisode.ts";

export const Character = {
  episode: async (parent: any): Promise<any> => {
    return parent.episode=parent.episode.map((i:any)=>getepisode(i));
  },
};