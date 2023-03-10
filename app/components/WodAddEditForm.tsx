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
    <form className="flex space-x-2" onSubmit={props.handleSubmit}>
      <input
        className="border border-gray-300 rounded outline-none px-2 ml-2 text-black max-w-[200px] sm:max-w-none"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Enter WOD Name..."
      />
      <button
        type="submit"
        disabled={!props.value}
        className={props.value ? "cursor-pointer" : "cursor-not-allowed"}
      >
        <Check />
      </button>
      <button type="button" onClick={() => props.onCancel()}>
        <Cancel />
      </button>
    </form>
  );
}

export default TitleAddEditForm;
