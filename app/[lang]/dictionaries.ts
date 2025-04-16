//app/[lang]/dictionaries.ts

// Suppression de server-only pour permettre l'import côté client
 
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
  add_sound: {
    title: string;
    description: string;
    prompt_label: string;
    prompt_placeholder: string;
    loading: string;
    source_video: string;
    preview_unavailable: string;
    processing_time: string;
    button: string;
    generating: string;
    untitled: string;
    view_video: string;
    errors: {
      invalid_source: string;
      missing_prompt: string;
      loading_failed: string;
      general: string;
    };
    success: string;
    how_it_works: {
      title: string;
      step1_title: string;
      step1_desc: string;
      step2_title: string;
      step2_desc: string;
      step3_title: string;
      step3_desc: string;
    }
  };
  create_image: {
    title: string;
    description: string;
    prompt: string;
    button: string;
  };
  canva: {
    title: string;
    selection: string;
    pen: string;
    thickness: string;
    thin: string;
    medium: string;
    thick: string;
    shapes: string;
    square: string;
    circle: string;
    triangle: string;
    line: string;
    import_image: string;
    save: string;
    saving: string;
    save_in_progress: string;
    save_error: string;
    save_success: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    my_drawings: string;
    my_generated_images: string;
    no_drawings: string;
    no_generated_images: string;
    login_required: string;
    preview_unavailable: string;
    image_unavailable: string;
    thumbnail: {
      view_full: string;
      open_in_scribble: string;
      open_in_variation: string;
      open_in_image2video: string;
      download: string;
      options: string;
      untitled: string;
    }
  };
  nav: {
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

