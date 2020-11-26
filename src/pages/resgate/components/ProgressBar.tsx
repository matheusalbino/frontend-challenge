import clsx from 'clsx';

interface ProgressBarProps {
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { value } = props;

  return (
    <div className="h-2 w-full border border-primary-medium">
      <div
        className={clsx('h-full', {
          'bg-primary-medium': value < 100,
          'bg-primary-light': value === 100,
        })}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
