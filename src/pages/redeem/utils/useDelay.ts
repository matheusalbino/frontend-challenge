import { useEffect, useState } from 'react';

export function useDelay(target: string, delay?: number): string;
export function useDelay(target: number, delay?: number): number;
export function useDelay(target: string | number, delay = 300): string | number {
  const [value, setValue] = useState(() => {
    if (typeof target === 'number') return 0;

    return '';
  });

  useEffect(() => {
    if (value !== undefined) {
      const timeout = setTimeout(() => {
        setValue(target);
      }, delay);

      return () => clearTimeout(timeout);
    }

    return () => {};
  }, [value, target, delay]);

  return value;
}
