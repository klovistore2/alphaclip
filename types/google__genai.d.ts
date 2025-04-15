// types/google__genai.d.ts
declare module '@google/genai' {
  export enum Modality {
    TEXT = 'text',
    IMAGE = 'image'
  }

  export interface GoogleGenAIOptions {
    apiKey: string;
  }

  export class GoogleGenAI {
    constructor(options: GoogleGenAIOptions);
    
    models: {
      generateContent(options: {
        model: string;
        contents: Array<{
          text?: string;
          inlineData?: {
            mimeType: string;
            data: string;
          };
        }>;
        config?: {
          responseModalities?: Modality[];
        };
      }): Promise<{
        candidates: Array<{
          content: {
            parts: Array<{
              text?: string;
              inlineData?: {
                mimeType: string;
                data: string;
              };
            }>;
          };
        }>;
      }>;
    };
  }
}