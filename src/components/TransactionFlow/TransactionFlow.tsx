import { useState } from "react";
import Button from "../Common/Button";
import ScrollableContainer from "../Common/ScrollableContainer";
import TextContent from "../Common/TextContent";
import TextTab from "../Common/TextTab";
import ApplePayButton from "./Children/ApplePayButton";
import FriendTransactionButton from "./Children/FriendTransactionButton";
type TTransactionFlowTab = "buy" | "sell";
interface ITransactionFlowProps {
  adjustHeightDep: boolean;
}
const TransactionFlow: React.FC<ITransactionFlowProps> = ({
  adjustHeightDep,
}) => {
  const [activeTab, setActiveTab] = useState<TTransactionFlowTab>("buy");
  return (
    <div className="px-5">
      <div className="flex justify-center">
        <div className="flex space-x-5">
          <TextTab
            label="Buy"
            onClick={() => {
              setActiveTab("buy");
            }}
            active={activeTab === "buy"}
          />
          <TextTab
            label="Sell"
            onClick={() => {
              setActiveTab("sell");
            }}
            active={activeTab === "sell"}
          />
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="flex justify-center">
          <TextContent variant="48" element="h3">
            12 KEYS
          </TextContent>
        </div>
        <div className="flex justify-center">
          <TextContent variant="16" element="span" className="text-gray-light">
            0.3 ETH
          </TextContent>
        </div>
      </div>
      <ScrollableContainer excludeFooterHeight={false} deps={[adjustHeightDep]}>
        <div className="h-full flex items-end pb-[32px]">
          <div className="space-y-4">
            {activeTab === "buy" && <ApplePayButton />}
            <FriendTransactionButton />
            <Button>
              complete {activeTab === "buy" ? "purchase" : "sale"}
            </Button>
          </div>
        </div>
      </ScrollableContainer>
    </div>
  );
};
export default TransactionFlow;
