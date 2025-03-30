import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const CarouselContext = React.createContext()

function Carousel({ children, opts, className, ...props }) {
  const [emblaRef, setEmblaRef] = useState(null)
  const [emblaApi, setEmblaApi] = useState(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef: setEmblaRef,
        carouselApi: emblaApi,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={setEmblaRef}
        className={`overflow-hidden ${className}`}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex ${className}`}
      {...props}
    />
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex-[0_0_100%] min-w-0 ${className}`}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = ({ className, ...props }) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full p-2 ${className}`}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  )
}
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = ({ className, ...props }) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full p-2 ${className}`}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </button>
  )
}
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}