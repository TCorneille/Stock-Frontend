import { useEffect, useState } from "react";

export const useCountdown = (expiresAt?: string) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      const diff =
        new Date(expiresAt).getTime() - Date.now();

      setTimeLeft(Math.max(diff, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  return timeLeft;
};