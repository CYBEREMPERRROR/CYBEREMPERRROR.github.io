import { useState, useEffect, useRef } from "react"

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef(null)

  useEffect(() => {
    const element = domRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  )
}

export default FadeInSection
