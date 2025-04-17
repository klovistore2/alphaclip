//app/[lang]/dictionaries.ts

// Suppression de server-only pour permettre l'import côté client
 
export type Localy = 'en' | 'fr';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
}
 
export const languageNames: Record<Localy, string> = {
  en: "English",
  fr: "Français",

}

export const locales_ = ["en", "fr"] as const


export const getDictionary = async (locale: Localy): Promise<TypeDictionary> =>
  dictionaries[locale]();

export interface TypeDictionary {
  languageSwitcher : {
    changeLanguage: string;
  }
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
    select_video: string;
    no_video_selected: string;
    select_from_gallery: string;
    errors: {
      invalid_source: string;
      missing_prompt: string;
      loading_failed: string;
      general: string;
      no_video_selected: string;
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
  scribble: {
    title: string;
    description: string;
    source_drawing: string;
    select_drawing: string;
    loading: string;
    loading_error: string;
    model_select: string;
    prompt_placeholder: string;
    button: string;
    generating: string;
    source: string;
    result: string;
    no_drawing: string;
    saved: string;
    generation_in_progress: string;
    full_size: string;
    complete_info: string;
    errors: {
      invalid_source: string;
      missing_prompt: string;
      missing_model: string;
      loading_failed: string;
      general: string;
    }
  };
  variation: {
    title: string;
    description: string;
    source_image: string;
    select_image: string;
    loading: string;
    loading_error: string;
    prompt_placeholder: string;
    button: string;
    generating: string;
    source: string;
    result: string;
    no_image: string;
    saved: string;
    generation_in_progress: string;
    full_size: string;
    complete_info: string;
    errors: {
      invalid_source: string;
      missing_prompt: string;
      loading_failed: string;
      general: string;
    }
  };
  image2video: {
    title: string;
    description: string;
    source_image: string;
    select_image: string;
    loading: string;
    loading_error: string;
    no_image: string;
    video_description: string;
    prompt_placeholder: string;
    video_length: string;
    fps: string;
    fps_value: string;
    prompt_optimizer: string;
    processing_time: string;
    button: string;
    generating: string;
    mobile_message: string;
    view_gallery: string;
    success_message: string;
    how_it_works: {
      title: string;
      step1_title: string;
      step1_desc: string;
      step2_title: string;
      step2_desc: string;
      step3_title: string;
      step3_desc: string;
    };
    errors: {
      invalid_source: string;
      missing_prompt: string;
      loading_failed: string;
      general: string;
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
    no_videos?: string;
    login_required: string;
    preview_unavailable: string;
    image_unavailable: string;
    public_videos?: string;
    gallery_video?: string;
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
    home: string,

  };
  userNav: {
    profile: string;
    settings: string;
    signIn?: string;
    loading?: string;
    account?: string;
    billing?: string;
    upgrade?: string;
    logOut?: string;
  };
  videoCard: {
    untitled: string;
    unknownUser: string;
    views: string;
    download: string;
    share: string;
    loading?: string; // Ajouté ici car utilisé dans le lecteur aussi
    options: string;
    downloadFailed: string;
    shareAction:  string;
  };

  watchpage?: { // Optionnel si la page watch n'est pas toujours rendue
    suggestions: string;
    no_suggestions: string;
    // Ajouter d'autres clés spécifiques à cette page ici si besoin
  };
}

