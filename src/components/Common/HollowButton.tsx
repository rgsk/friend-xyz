interface IHollowButtonProps {
  children: any;
}
const HollowButton: React.FC<IHollowButtonProps> = ({ children }) => {
  return (
    <button className="w-full py-2 px-3 border border-gray-dark rounded-xl">
      {children}
    </button>
  );
};

export default HollowButton;
