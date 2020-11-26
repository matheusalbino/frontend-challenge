import clsx from 'clsx';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, type = 'button', children, ...buttonProps } = props;
  return (
    <button
      type={type}
      {...buttonProps}
      className={clsx(
        'border text-sm uppercase px-2 py-1 font-medium rounded',
        'border-primary-light bg-primary-light bg-opacity-10 text-primary-light',
        'disabled:bg-transparent disabled:border-white disabled:border-opacity-25 disabled:text-white disabled:text-opacity-50',
        className
      )}
    >
      {children}
    </button>
  );
};
