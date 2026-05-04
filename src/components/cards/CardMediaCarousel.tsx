import { useEffect, useState } from "react"

type CardMediaCarouselProps = {
  title: string
  image?: string
  images?: string[]
  imageFit?: "cover" | "contain"
  durationSeconds?: number
  slideIntervalMs?: number
  slideTransitionMs?: number
  delayMs?: number
}

function hashString(value: string) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }

  return hash
}

export default function CardMediaCarousel({
  title,
  image,
  images,
  imageFit = "cover",
  durationSeconds,
  slideIntervalMs = 3500,
  slideTransitionMs = 450,
  delayMs,
}: CardMediaCarouselProps) {
  const sourceImages = images?.length ? images : image ? [image] : []
  const [activeIndex, setActiveIndex] = useState(0)
  const effectiveSlideIntervalMs = durationSeconds ? durationSeconds * 1000 : slideIntervalMs

  if (sourceImages.length === 0) {
    return <div className="h-48 bg-slate-900" />
  }

  useEffect(() => {
    if (sourceImages.length <= 1) {
      return
    }

    const initialDelay = delayMs ?? hashString(title) % 2500
    let intervalId: number | undefined

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % sourceImages.length)
      }, effectiveSlideIntervalMs)
    }, initialDelay)

    return () => {
      window.clearTimeout(timeoutId)

      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
    }
  }, [delayMs, effectiveSlideIntervalMs, sourceImages.length, title])

  const isContain = imageFit === "contain"

  return (
    <div className="overflow-hidden h-48 bg-slate-950/70">
      <div
        className="flex h-48 w-full transition-transform ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transitionDuration: `${slideTransitionMs}ms`,
        }}
      >
        {sourceImages.map((sourceImage, index) => (
          <div
            key={`${sourceImage}-${index}`}
            className={`h-48 w-full flex-none overflow-hidden ${
              isContain ? "flex items-center justify-center" : ""
            }`}
          >
            <img
              src={sourceImage}
              alt={`${title} - image ${index + 1}`}
              className={
                isContain ? "h-full w-auto object-contain" : "h-full w-full object-cover"
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}