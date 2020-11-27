import clsx from 'clsx';
import { useDelay } from '../pages/redeem/utils/useDelay';

interface ProgressBarProps {
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { value } = props;

  const percentage = useDelay(value);

  return (
    <div className="h-2 w-full border border-primary-medium">
      <div
        className={clsx('h-full transition-all duration-1000 easy-in', {
          'bg-primary-medium': percentage < 100,
          'bg-primary-light': percentage === 100,
        })}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
