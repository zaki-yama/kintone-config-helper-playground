import React from "react";

type SaveButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <button onClick={onClick} className="kintoneplugin-button-dialog-ok">
      Save
    </button>
  );
};
