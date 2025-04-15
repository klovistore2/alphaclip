import replicate
import os

REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")
image = open('tenerife.png', "rb")

import replicate
output = replicate.run(
    "nightmareai/real-esrgan:42fed1c4974146d4d2414e2be2c5277c7fcf05fcc3a73abf41610695738c1d7b",
    input={"image": image, "scale" :8}
)
print(output)
