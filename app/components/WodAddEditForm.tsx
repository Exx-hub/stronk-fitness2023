import React from "react";
import Cancel from "./heroIcons/Cancel";
import Check from "./heroIcons/Check";

function TitleAddEditForm(props: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onCancel: () => void;
}) {
  return (
    <form className="flex space-x-4" onSubmit={props.handleSubmit}>
      <input
        className="border border-gray-300 rounded outline-none px-2 ml-2 text-black"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Enter WOD Name..."
      />
      <button type="submit">
        <Check />
      </button>
      <button type="button" onClick={() => props.onCancel()}>
        <Cancel />
      </button>
    </form>
  );
}

export default TitleAddEditForm;
