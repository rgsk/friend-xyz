const displayPartialText = (
  text: string,
  {
    maxLength,
    suffix = "...",
    completeLastWord,
  }: {
    maxLength: number;
    suffix?: string;
    completeLastWord: boolean;
  }
) => {
  if (text.length <= maxLength) {
    return text;
  }
  // note maxLength is inclusive of suffix length
  const remainingLength = maxLength - suffix.length;
  let partialText = text.slice(0, remainingLength);
  if (completeLastWord) {
    if (text[remainingLength] !== " ") {
      const indexOfSpaceFromLast = partialText.lastIndexOf(" ");
      partialText = partialText.slice(0, indexOfSpaceFromLast);
    }
  }
  const finalText = partialText + suffix;
  return finalText;
};
export default displayPartialText;
