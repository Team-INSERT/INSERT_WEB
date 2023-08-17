import { useEffect, useState } from "react";

function getEasedOutProgressRate(ratio: number) {
  return 1 - (1 - ratio) ** 3;
}

const BROWSER_FPS = 60;

export interface UseCountAnimationProps {
  startNumber?: number; // count 시작 숫자
  endNumber: number; // count 종료 숫자
  durationMS: number; // 애니메이션 시간
  fpsReductionFactor?: number; // fps를 n배 줄이고 싶을 때의 n
  canStart?: boolean; // 애니메이션을 시작할 타이밍 (ex: 특정 영역이 화면이 보이기 시작할 때)
}
export const useCountAnimation = (props: UseCountAnimationProps) => {
  const {
    startNumber = 0,
    endNumber,
    durationMS,
    fpsReductionFactor = 1,
    canStart = true,
  } = props;

  const fps = BROWSER_FPS / fpsReductionFactor;

  const [count, setCount] = useState<number>(startNumber);

  useEffect(() => {
    if (!canStart) return;
    let currentFrame = 0;
    let lastRafExecutionTimestamp = 0;
    let rafId: number;

    const handleCount = (currentTimestamp: number) => {
      if (
        Math.round(currentTimestamp - lastRafExecutionTimestamp) <
        Math.round(1000 / fps)
      ) {
        rafId = requestAnimationFrame(handleCount);
        return;
      }
      const totalFrames = Math.ceil(durationMS / (1000 / fps));
      const progressRate = getEasedOutProgressRate(currentFrame / totalFrames);

      setCount(
        Math.floor(startNumber + (endNumber - startNumber) * progressRate),
      );
      currentFrame += 1;
      lastRafExecutionTimestamp = currentTimestamp;

      if (progressRate === 1) return cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleCount);
    };

    rafId = requestAnimationFrame(handleCount);
    return () => cancelAnimationFrame(rafId);
  }, [canStart]);

  return count;
};
export default useCountAnimation;
