import displayPartialText from "@/lib/displayPartialText";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ITextContentProps extends HTMLAttributes<HTMLElement> {
  element:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "p"
    | "del"
    | "button";
  variant:
    | "16-18"
    | "20-28"
    | "12-14"
    | "14-16"
    | "10-14"
    | "16-28"
    | "18-36"
    | "10-20"
    | "12-18"
    | "10-16"
    | "18-28"
    | "24-48"
    | "14-20"
    | "14-18"
    | "16-20"
    | "24-32"
    | "22-28"
    | "10"
    | "14"
    | "12"
    | "16"
    | "22"
    | "48";
  text?: string;
  partialTextCompleteLastWord?: boolean;
  partialTextSuffix?: string;
  children?: any;
  maxLength?: number;
}
const TextContent: React.FC<ITextContentProps> = ({
  element,
  children,
  variant,
  text,
  partialTextCompleteLastWord = false,
  partialTextSuffix = "...",
  maxLength,
  ...props
}) => {
  const fontSize = (() => {
    let className: string;
    switch (variant) {
      case "16-18": {
        className = "text-[16px] md:text-[18px]";
        break;
      }
      case "20-28": {
        className = "text-[20px] md:text-[28px]";
        break;
      }
      case "12-14": {
        className = "text-[12px] md:text-[14px]";
        break;
      }
      case "14-16": {
        className = "text-[14px] md:text-[16px]";
        break;
      }
      case "10-14": {
        className = "text-[10px] md:text-[14px]";
        break;
      }
      case "16-28": {
        className = "text-[16px] md:text-[28px]";
        break;
      }
      case "18-36": {
        className = "text-[16px] md:text-[36px]";
        break;
      }
      case "10-20": {
        className = "text-[10px] md:text-[20px]";
        break;
      }
      case "12-18": {
        className = "text-[12px] md:text-[18px]";
        break;
      }
      case "10-16": {
        className = "text-[10px] md:text-[16px]";
        break;
      }
      case "24-48": {
        className = "text-[24px] md:text-[48px]";
        break;
      }
      case "14-20": {
        className = "text-[14px] md:text-[20px]";
        break;
      }
      case "14-18": {
        className = "text-[14px] md:text-[18px]";
        break;
      }
      case "16-20": {
        className = "text-[16px] md:text-[20px]";
        break;
      }
      case "24-32": {
        className = "text-[24px] md:text-[32px]";
        break;
      }
      case "22-28": {
        className = "text-[22px] md:text-[28px]";
        break;
      }
      case "18-28": {
        className = "text-[18px] md:text-[28px]";
        break;
      }
      case "10": {
        className = "text-[10px]";
        break;
      }
      case "14": {
        className = "text-[14px]";
        break;
      }
      case "12": {
        className = "text-[12px]";
        break;
      }
      case "16": {
        className = "text-[16px]";
        break;
      }
      case "22": {
        className = "text-[22px]";
        break;
      }
      case "48": {
        className = "text-[48px]";
        break;
      }
    }
    return className;
  })();
  const { className, ...restProps } = props;
  const finalClassName = clsx(fontSize, className);
  const finalText = children || text || "";
  const shortenedText = maxLength
    ? displayPartialText(finalText, {
        maxLength,
        completeLastWord: partialTextCompleteLastWord,
        suffix: partialTextSuffix,
      })
    : finalText;
  const Component = element;
  return (
    <Component className={finalClassName} {...restProps}>
      {shortenedText}
    </Component>
  );
};
export default TextContent;
