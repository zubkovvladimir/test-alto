import React from 'react';

import cx from 'classnames';

import classes from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary';

type ButtonSize = 'pagination' | 'pagination-btn-more';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isActive?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = '', type, variant = 'primary', fullWidth = false, size, children, disabled, isActive, ...props },
    ref,
  ) => (
    <button
      className={cx(classes.btn, classes[`btn--${variant}`], classes[`btn--${size}`], {
        [classes['--active']]: isActive,
        [classes['btn--full-width']]: fullWidth,
        [className]: !!className,
      })}
      disabled={disabled}
      ref={ref}
      type={type}
      {...props}
    >
      {children}
    </button>
  ),
);
