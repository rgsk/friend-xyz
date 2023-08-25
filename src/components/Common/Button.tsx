interface IButtonProps {
  children: any;
}
const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <button className="bg-primary rounded-xl text-black py-2.5 w-full">
      {children}
    </button>
  );
};
export default Button;
