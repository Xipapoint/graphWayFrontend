import { useState, useEffect } from 'react';
import useThrottle from './useThrottleFunction';

const useGraphSize = (throttleDelay: number) => {
  const [size, setSize] = useState(0);
  const [heightSize, setHeightSize] = useState(0)
  const getSizes = (graphElement: HTMLElement) => {
    return {
      width: graphElement.clientWidth,
      height: graphElement.clientHeight,
    };
  }
  const handleResize = useThrottle(() => {
    setSize(document.getElementById('graph')!.clientWidth)
    setHeightSize(document.getElementById('graph')!.clientHeight)
  }, throttleDelay)

  const waitForGraphElement = () => {
    const element = document.getElementById('graph')
    if (element) {
      const {width, height} = getSizes(element)
      setHeightSize(height)
      setSize(width)
    } else {
      setTimeout(waitForGraphElement, 50)
    }
  };


  useEffect(() => {
    waitForGraphElement()

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return {size, heightSize};
};

export default useGraphSize;