import clsx from "clsx";
import TextContent from "./TextContent";

interface ITextTabProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}
const TextTab: React.FC<ITextTabProps> = ({ label, active, onClick }) => {
  return (
    <TextContent
      element="button"
      variant="16"
      className={clsx(active ? "text-primary" : "text-base")}
      onClick={onClick}
    >
      {label}
    </TextContent>
  );
};
export default TextTab;
