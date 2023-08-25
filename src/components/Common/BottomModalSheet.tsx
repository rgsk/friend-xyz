import Sheet from "react-modal-sheet";

interface IBottomModalSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}
const BottomModalSheet: React.FC<IBottomModalSheetProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <Sheet.Container className="!bg-[var(--background)] border-t border-t-gray-dark">
        <Sheet.Header />
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
export default BottomModalSheet;
