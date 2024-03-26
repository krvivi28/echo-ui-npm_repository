import React from "react";

interface ISampleButtonProps {
  children: React.ReactNode;
}

const SampleButton = (props: ISampleButtonProps) => {
  const { children } = props;
  return (
    <div>
      <button
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
