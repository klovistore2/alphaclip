//app/[lang]/dictionaries.ts

import 'server-only'
 
export type Localy = 'en' | 'fr';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Localy): Promise<TypeDictionary> =>
  dictionaries[locale]();

export interface TypeDictionary {
  metadata: {
    title: string;
    description: string;
  };
  products?: {
    cart: string;
    text: string;
  };
  create_image: {
    title: string;
    description: string;
    prompt: string;
    button: string;
  };
  nav?: {
    playground: string;
    playgroundAI: string;
    paintStudio: string;
    models: string;
  };
  sidebar: {
    gallery: string;
    gallery_image: string;
    gallery_video: string;
    createImage: string;
    createImage_canva: string;
    imageToImage: string;
    imageToImage_scribble: string;
    imageToImage_variation: string;
    generateVideo: string;
    generateVideo_imageToVideo: string;
    improveVideo: string;
    improveVideo_addSound: string;
    improveVideo_makeLonger: string;
  };
  userNav: {
    profile: string;
    settings: string;
  };
}

