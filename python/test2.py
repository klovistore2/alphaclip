import replicate
import os

REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")
image = open('tenerife.png', "rb")

import replicate

input = {
    "seed": -1,
    "video": "https://huggingface.co/hkchengrex/MMAudio/resolve/main/examples/sora_galloping.mp4",
    "prompt": "galloping"
}

output = replicate.run(
    "zsxkib/mmaudio:62871fb59889b2d7c13777f08deb3b36bdff88f7e1d53a50ad7694548a41b484",
    input=input
)
with open("output.mp4", "wb") as file:
    file.write(output.read())