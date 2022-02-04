import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({numMaximun = 10}) => {
    const [counter, setState] = useState(8);
    const elementToAnimated = useRef<any>(null);
    const gsapTimeline = useRef(gsap.timeline());

    const handleClick = ()=>{
      if (counter === numMaximun) return;
      setState(pre=> Math.min(pre + 1, numMaximun));
    }
  
    useLayoutEffect(() => {
        if (!elementToAnimated.current) return;
        gsapTimeline.current.to(elementToAnimated.current, {y: -10, duration:0.1, ease: 'ease.out'})
          .to(elementToAnimated.current, {y: 0, duration:1, ease: 'bounce.out'})
      return () => {};
    }, []);

    useEffect(() => {
        gsapTimeline.current.play(0);
    }, [counter]);
    
    return {
        elementToAnimated,
        counter,
        handleClick
    }
};
