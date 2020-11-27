import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'confirm' | 'cancel';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, variant = 'primary', type = 'button', children, ...buttonProps } = props;

  return (
    <button
      type={type}
      {...buttonProps}
      className={clsx(
        'rounded py-1',
        {
          'border text-sm uppercase px-2 font-medium': variant === 'primary',
          'border-primary-light bg-primary-light bg-opacity-10 text-primary-light': variant === 'primary',
          'disabled:bg-transparent disabled:border-white disabled:border-opacity-25 disabled:text-white disabled:text-opacity-50':
            variant === 'primary',
          'bg-primary-light px-4 text-white': variant === 'confirm',
          'bg-white bg-opacity-25 px-4 text-white': variant === 'cancel',
        },
        className
      )}
    >
      {children}
    </button>
  );
};
