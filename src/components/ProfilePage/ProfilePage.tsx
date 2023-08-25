"use client";

import useRefresh from "@/hooks/useRefresh";
import { useState } from "react";
import BottomModalSheet from "../Common/BottomModalSheet";
import Button from "../Common/Button";
import PageContainer from "../Common/PageContainer";
import ScrollableContainer from "../Common/ScrollableContainer";
import TextContent from "../Common/TextContent";
import FeedItem from "../HomePage/Children/Feed/Children/FeedItem";
import TransactionFlow from "../TransactionFlow/TransactionFlow";

interface IProfilePageProps {}
const ProfilePage: React.FC<IProfilePageProps> = ({}) => {
  const name = "Sharif Shameen";
  const [tradeSheetActive, setTradeSheetActive] = useState(false);
  const { refresh: adjustHeight, refreshDep: adjustHeightDep } = useRefresh();

  return (
    <PageContainer>
      <div className="flex justify-center">
        <TextContent variant="14" element="span" className="font-medium">
          @sharifshameem
        </TextContent>
      </div>

      <div className="mt-9">
        <div className="flex space-x-6">
          <div>
            <img
              src="/profile-2.png"
              alt={name}
              className="rounded-full w-[64px] h-[64px]"
            />
          </div>
          <div>
            <TextContent variant="16" element="span">
              Sharif Shameem
            </TextContent>
            <div>
              <TextContent
                variant="14"
                element="span"
                className="text-gray-light"
              >
                293 ETH
              </TextContent>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-around">
          <HoldingDetail>4 HOLDERS</HoldingDetail>
          <HoldingDetail>2 HOLDING</HoldingDetail>
        </div>
      </div>
      <div className="mt-5">
        <Button
          onClick={() => {
            setTradeSheetActive(true);
          }}
        >
          trade
        </Button>
      </div>
      <BottomModalSheet
        isOpen={tradeSheetActive}
        onClose={() => setTradeSheetActive(false)}
        onOpenEnd={adjustHeight}
      >
        <TransactionFlow adjustHeightDep={adjustHeightDep} />
      </BottomModalSheet>
      <div className="mt-5">
        <TextContent element="span" variant="16">
          TRADES ⚡️
        </TextContent>
      </div>
      <div className="mt-3">
        <ScrollableContainer>
          <div className="space-y-3">
            {Array(15)
              .fill(0)
              .map((v, i) => (
                <FeedItem key={i} />
              ))}
          </div>
          <div className="h-3"></div>
        </ScrollableContainer>
      </div>
    </PageContainer>
  );
};
export default ProfilePage;

interface IHoldingDetailProps {
  children: any;
}
const HoldingDetail: React.FC<IHoldingDetailProps> = ({ children }) => {
  return (
    <TextContent variant="14" element="span">
      {children}
    </TextContent>
  );
};
