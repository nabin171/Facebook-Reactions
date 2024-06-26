"use client";
import React, { useState } from "react";
import { BsFillEmojiAngryFill } from "react-icons/bs";
import { ImHappy2 } from "react-icons/im";
import { SlLike } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { Button } from "@nextui-org/button";
const Reaction = () => {
  const [postReactions, setPostReactions] = useState({
    angry: 5,
    wow: 1,
    like: 20,
    love: 3,
  });
  const [isReactionDivOpen, setIsReactionDivOpen] = useState(false);
  const [reactionType, setReactionType] = useState(null);

  const handleReactionChange = (newReaction) => {
    const reactionsBckUp = { ...postReactions };
    if (newReaction === reactionType) {
      reactionsBckUp[newReaction]--;
      setReactionType(null);
    } else {
      reactionsBckUp[newReaction]++;
      setReactionType(newReaction);
    }
    setPostReactions(reactionsBckUp);
  };

  const generateSelectedReaction = () => {
    if (reactionType == "angry") {
      return (
        <BsFillEmojiAngryFill
          onClick={() => handleReactionChange("angry")}
          size={80}
          color="crimson"
        />
      );
    } else if (reactionType == "wow") {
      return (
        <ImHappy2
          size={80}
          onClick={() => handleReactionChange("wow")}
          color="#FFDD8B"
        />
      );
    } else if (reactionType == "love") {
      return (
        <FcLike
          onClick={() => handleReactionChange("love")}
          size={80}
          color="#FFDD8B"
        />
      );
    } else {
      return (
        <SlLike
          onClick={() => handleReactionChange("like")}
          size={80}
          color={reactionType && "#89CFF0"}
        />
      );
    }
  };

  return (
    <div>
      {isReactionDivOpen && (
        <div
          className="flex gap-4 p-2 mt-4 ml-4 shadow-lg 
      border justify-center items-center bg-white border-gray-400 w-[30%] rounded-lg  "
        >
          <SlLike
            size={reactionType == "like" ? 140 : 80}
            onClick={() => handleReactionChange("like")}
            color="#89CFF0"
          />
          <BsFillEmojiAngryFill
            size={reactionType == "angry" ? 140 : 80}
            onClick={() => handleReactionChange("angry")}
            color="crimson"
          />
          <ImHappy2
            size={reactionType == "wow" ? 140 : 80}
            onClick={() => handleReactionChange("wow")}
            color="#FFDD8B"
          />
          <FcLike
            size={reactionType == "love" ? 140 : 80}
            onClick={() => handleReactionChange("love")}
            color="crimson"
          />
        </div>
      )}
      <div
        className="m-2 shadow-lg w-20"
        onMouseEnter={() => setIsReactionDivOpen(true)}
      >
        {generateSelectedReaction()}
      </div>
      <div className="flex gap-6 shadow-lg m-4">
        <div> angry: {postReactions.angry}</div>
        <div> wow: {postReactions.wow}</div>
        <div> like: {postReactions.like}</div>
        <div> love: {postReactions.love}</div>
      </div>
    </div>
  );
};

export default Reaction;
