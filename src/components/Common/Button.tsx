interface IButtonProps {
  children: any;
  onClick?: () => void;
}
const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary rounded-xl text-black py-2.5 w-full"
    >
      {children}
    </button>
  );
};
export default Button;
