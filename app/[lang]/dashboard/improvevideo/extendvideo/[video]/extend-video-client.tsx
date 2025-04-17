// app/[lang]/dashboard/improvevideo/extendvideo/[video]/extend-video-client.tsx
"use client";

import { useState } from "react";
import { GeneratedVideo } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { extendVideoAction } from "@/lib/actions/extendVideoAction";

interface ExtendDictionary {
  title: string;
  description: string;
  source_video: string;
  prompt_label: string;
  prompt_placeholder: string;
  loading: string;
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
  };
}

interface ExtendVideoClientProps {
  sourceVideo: GeneratedVideo;
  dict: ExtendDictionary;
}

export default function ExtendVideoClient({ sourceVideo, dict }: ExtendVideoClientProps) {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generationStarted, setGenerationStarted] = useState(false);
  const [generationId, setGenerationId] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const handleGenerateClick = async () => {
    if (!sourceVideo.videoUrl) {
      toast({
        title: dict.errors.invalid_source,
        variant: "destructive",
      });
      return;
    }

    if (!prompt.trim()) {
      toast({
        title: dict.errors.missing_prompt,
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);

      // Call the server action to extend the video
      const result = await extendVideoAction({
        sourceVideoId: sourceVideo.id,
        sourceVideoUrl: sourceVideo.videoUrl,
        prompt: prompt.trim(),
      });

      if (result.success) {
        toast({
          title: dict.success,
        });
        
        if (result.generatedVideoId) {
          setGenerationId(result.generatedVideoId);
          setGenerationStarted(true);
        }
      } else {
        toast({
          title: result.error || dict.errors.general,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error extending video:", error);
      toast({
        title: dict.errors.general,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewClick = () => {
    if (generationId) {
      // Use language-aware routing
      const lang = window.location.pathname.split('/')[1] || 'en';
      router.push(`/${lang}/dashboard/watch/${generationId}`);
    }
  };

  const handleViewOriginalClick = () => {
    // Use language-aware routing
    const lang = window.location.pathname.split('/')[1] || 'en';
    router.push(`/${lang}/dashboard/watch/${sourceVideo.id}`);
  };

  return (
    <div className="space-y-8">
      {/* Source Video Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">{dict.source_video}</h2>
        <Card className="p-4 max-w-2xl">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md mb-4 overflow-hidden relative">
            {sourceVideo.videoUrl ? (
              <video
                src={sourceVideo.videoUrl}
                className="w-full h-full object-contain"
                controls
                muted
                autoPlay={false}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                {dict.preview_unavailable}
              </div>
            )}
          </div>
          <div className="text-lg font-medium">
            {sourceVideo.title || dict.untitled}
          </div>
        </Card>
      </div>

      {/* Prompt Section */}
      {!generationStarted ? (
        <div className="max-w-2xl">
          <div className="mb-4">
            <Label htmlFor="prompt" className="text-lg font-medium mb-2 block">
              {dict.prompt_label}
            </Label>
            <Textarea
              id="prompt"
              placeholder={dict.prompt_placeholder}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={5}
              className="w-full resize-none"
              disabled={isLoading}
            />
          </div>

          <div className="text-sm text-gray-500 mb-4">
            {dict.processing_time}
          </div>

          <Button
            onClick={handleGenerateClick}
            disabled={isLoading || !sourceVideo.videoUrl}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {dict.generating}
              </>
            ) : (
              dict.button
            )}
          </Button>
        </div>
      ) : (
        <div className="max-w-2xl bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
            <h3 className="text-xl font-medium text-green-800 dark:text-green-200">
              {dict.success}
            </h3>
          </div>
          <p className="text-green-700 dark:text-green-300 mb-4">
            {dict.how_it_works.step3_desc}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={handleViewClick} variant="default">
              {dict.view_video}
            </Button>
            <Button onClick={handleViewOriginalClick} variant="outline">
              {dict.source_video}
            </Button>
          </div>
        </div>
      )}

      {/* How It Works Section */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">{dict.how_it_works.title}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-4">
            <h3 className="font-bold mb-2">{dict.how_it_works.step1_title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {dict.how_it_works.step1_desc}
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold mb-2">{dict.how_it_works.step2_title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {dict.how_it_works.step2_desc}
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold mb-2">{dict.how_it_works.step3_title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {dict.how_it_works.step3_desc}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}