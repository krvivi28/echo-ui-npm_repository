import React from "react";

interface ISampleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SampleButton = (props: ISampleButtonProps) => {
  const { children, onClick } = props;
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          background: "black",
          color: "green",
          padding: "5px 20px",
          borderRadius: "8px",
        }}
      >
        {children}
      </button>
    </div>
  );
};

export { SampleButton };
