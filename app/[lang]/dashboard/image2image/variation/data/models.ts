export const types = ["Diffusion", "Txt2Image"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type
}

export const models: Model<ModelType>[] = [
  {
    id: "c305f976-8e38-42b1-9fb7-d21b2e34f0da",
    name: "OpenAI DALL-E",
    description: "Generates images from text prompts. Can also edit images.",
    type: "Txt2Image",
    strengths:"",
  },
  {
    id: "464a47c3-7ab5-44d7-b669-f9cb5a9e8465",
    name: "StableDiffusion",
    description: "Generates images from text prompts. Can also edit images.",
    type: "Txt2Image",
    strengths:"",
  },
  {
    id: "ac0797b0-7e31-43b6-a494-da7e2ab43445",
    name: "Gemini",
    description: "Generates images from text prompts. Can also edit images.",
    type: "Txt2Image",
    strengths: "",
  },
  {
    id: "be638fb1-973b-4471-a49c-290325085802",
    name: "DeepSeek",
    description:
      "Generates images from text prompts. Can also edit images.",
    type: "Txt2Image",
    strengths:"",
  },
  {
    id: "b43c0ea9-5ad4-456a-ae29-26cd77b6d0fb",
    name: "Flux1",
    description:
      "Generates images from text prompts. Can also edit images.",
    type: "Txt2Image",
    strengths: "",
  },
  {
    id: "bbd57291-4622-4a21-9eed-dd6bd786fdd1",
    name: "...",
    description:
      "Generates images from text prompts. Can also edit images.",
    type: "Txt2Image",
    strengths: "",
  },
]
