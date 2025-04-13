import { Metadata } from "next"
import Image from "next/image"
import { Download, RotateCcw, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
//import {
  //Tabs,
  //TabsContent,
//} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ModelSelector } from "./components/model-selector"
import { PresetActions } from "./components/preset-actions"
import { PresetSelector } from "./components/preset-selector"
import { PresetShare } from "./components/preset-share"
import { TemperatureSelector } from "./components/temperature-selector"
import { TopPSelector } from "./components/top-p-selector"
import { models, types } from "./data/models"
import { presets } from "./data/presets"
import { MaxLengthSelector } from "./components/maxlength-selector"

export const metadata: Metadata = {
  title: "Image Generator",
  description: "AI Image Generation Playground",
}

export default function PlaygroundPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Image Generator</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <PresetSelector presets={presets} />
            <div className="hidden space-x-2 md:flex">
              <PresetShare />
            </div>
            <PresetActions />
          </div>
        </div>
        <Separator />
        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr_300px] grid-cols-1">
            {/* Input Section - Left Side */}
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                <h3 className="text-lg font-medium">Prompt</h3>
                <Textarea
                  placeholder="Describe the image you want to generate..."
                  className="flex-1 p-4 min-h-[200px]"
                />
                <div className="flex items-center space-x-2">
                  <Button type="submit" className="w-full sm:w-auto">Generate Image</Button>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                    <span className="sr-only">Clear</span>
                  </Button>
                </div>
              </div>

              {/* Controls Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ModelSelector types={types} models={models} />
                <TemperatureSelector defaultValue={[0.56]} />
                <TopPSelector defaultValue={[0.9]} />
                <MaxLengthSelector defaultValue={[256]} />
              </div>
            </div>

            {/* Output Section - Right Side */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium">Generated Image</h3>
              <Card className="border border-dashed flex items-center justify-center rounded-lg overflow-hidden aspect-square">
                <CardContent className="p-0 w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    {/* Placeholder before image is generated */}
                    <div className="flex flex-col items-center justify-center h-full space-y-2">
                      <Image
                        src="/examples/placeholder-image.png" 
                        width={400}
                        height={400}
                        alt="Generated image will appear here"
                        className="opacity-30"
                      />
                      <p className="text-sm text-muted-foreground">Enter a prompt and click Generate Image</p>
                    </div>

                    {/* This is where the generated image would appear */}
                    {/* <Image
                      src="/path/to/generated/image.png"
                      width={512} 
                      height={512}
                      alt="AI generated image"
                      className="object-contain"
                    /> */}
                  </div>
                </CardContent>
              </Card>

              {/* Image Actions */}
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" disabled>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <div className="flex space-x-2">
                  <Button size="sm" variant="secondary" disabled>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Regenerate
                  </Button>
                </div>
              </div>

              {/* Generation Parameters Display */}
              <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
                <p><strong>Model:</strong> Stable Diffusion XL</p>
                <p><strong>Resolution:</strong> 512x512</p>
                <p><strong>Steps:</strong> 30</p>
                <p><strong>CFG Scale:</strong> 7.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}