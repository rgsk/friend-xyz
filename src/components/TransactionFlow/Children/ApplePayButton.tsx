import HollowButton from "@/components/Common/HollowButton";
import TextContent from "@/components/Common/TextContent";

interface IApplePayButtonProps {}
const ApplePayButton: React.FC<IApplePayButtonProps> = ({}) => {
  return (
    <HollowButton>
      <div className="py-2 px-1">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex space-x-4 items-center">
              <div>
                <img src="/apple-icon.svg" alt="apple" className="w-9 h-9" />
              </div>
              <TextContent variant="16" element="span">
                Apple Pay
              </TextContent>
            </div>
          </div>
          <div>
            <img src="/chevron-right.svg" alt="proceed" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </HollowButton>
  );
};

export default ApplePayButton;
