"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cancel from "../components/heroIcons/Cancel";
import Check from "../components/heroIcons/Check";
import Edit from "../components/heroIcons/Edit";
import Star from "../components/heroIcons/Star";
import StarOutline from "../components/heroIcons/StarOutline";
import Trash from "../components/heroIcons/Trash";

interface Props {
  id: string;
  name: string;
  weight: string;
  favorite: boolean;
  userId: string;
}

function PrCard(props: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const [editedWeight, setEditedWeight] = useState("");

  const router = useRouter();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    const result = await fetch(`/api/prs/${props.id}`, {
      method: "DELETE",
    });

    const data = await result.json();

    console.log(data);

    router.refresh();
  };

  const handleCancel = () => {
    setEditedWeight("");
    setIsEditing(false);
  };

  const handleSubmit = async () => {
    const result = await fetch(`/api/prs/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ weight: editedWeight }),
    });

    const data = await result.json();

    console.log(data);

    setEditedWeight("");
    setIsEditing(false);
    router.refresh();
  };

  const handleToggle = async () => {
    console.log("favorite?", props.favorite);

    const result = await fetch(`/api/prs/favorite`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite: !props.favorite, prId: props.id }),
    });

    const data = await result.json();

    console.log(data);
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between bg-white rounded p-2 min-w-[324px]">
      {isEditing ? (
        <>
          <div className="flex items-center">
            <h2 className="font-semibold mx-1">{props.name}</h2>
            <input
              className="border border-gray-300 rounded outline-none px-2 ml-2 text-black w-[120px]"
              placeholder="New Record"
              value={editedWeight}
              onChange={(e) => setEditedWeight(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-1 ml-3">
            <button type="button" onClick={handleSubmit}>
              <Check />
            </button>
            <button type="button" onClick={handleCancel}>
              <Cancel />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            <div className="text-amber-700 cursor-pointer" onClick={handleToggle}>
              {props.favorite ? <Star /> : <StarOutline />}
            </div>
            <h2 className="font-semibold mx-1 translate-y-[2px]">{props.name}</h2>
            <p className="ml-2 translate-y-[2px]">{props.weight}</p>
          </div>
          <div className="flex items-center justify-end space-x-1">
            <button className="cursor-pointer" onClick={handleEdit}>
              <Edit />
            </button>

            <button className="cursor-pointer" onClick={handleDelete}>
              <Trash />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PrCard;
