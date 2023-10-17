/* eslint-disable react/prop-types */

const HighlightText = ({ text }) => {
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold pt-[12px]">
      {text}
    </span>
  );
};

export default HighlightText;
