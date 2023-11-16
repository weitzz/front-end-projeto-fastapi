interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
  onClick?: (() => void) | undefined;
}

const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
