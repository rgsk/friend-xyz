interface IPageContainerProps {
  children: any;
}
const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
  return <div className="px-5 pt-8">{children}</div>;
};
export default PageContainer;
