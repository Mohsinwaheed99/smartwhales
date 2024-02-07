import Image from 'next/image';
import { MouseEventHandler } from 'react';

type Props = {
  title: string | null;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: 'button' | 'submit';
  className?: string;
};

const Button = ({ title, leftIcon, rightIcon, handleClick, submitting, type, className }: Props) => (
  <button type={type || 'button'} disabled={submitting || false} className={className} onClick={handleClick}>
    {leftIcon && <Image src={leftIcon} width={18} height={18} alt="left icon" />}
    {title}
    {rightIcon && <Image src={rightIcon} width={18} height={18} alt="right icon" />}
  </button>
);

export default Button;
