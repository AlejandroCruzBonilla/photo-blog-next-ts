import { useEffect, useState } from 'react';

export const useOnScreen = (ref: any) => {

  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry.isIntersecting)
      setIntersecting(entry.isIntersecting)
    });
    if (ref?.current) {
      observer.observe(ref?.current)
    }

    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}