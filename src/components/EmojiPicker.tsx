import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [counterEmojiFromCurrentRender, queueRerenderWithNewCounterEmoji] =
    useState("");
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState("");

  const handleAddClock = () => {
    queueRerenderWithNewFavouriteValue(counterEmojiFromCurrentRender);
    queueRerenderWithNewCounterEmoji("⏰");
  };

  const handleAddBed = () => {
    queueRerenderWithNewFavouriteValue(counterEmojiFromCurrentRender);
    queueRerenderWithNewCounterEmoji("🛌");
  };

  const handleAddFrying = () => {
    queueRerenderWithNewFavouriteValue(counterEmojiFromCurrentRender);
    queueRerenderWithNewCounterEmoji("🍳")
  };
  const handleStoreCurrentCount = () => {
    queueRerenderWithNewFavouriteValue(counterEmojiFromCurrentRender);
  };

  
  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your stored Emoji: {favouriteValueFromCurrentRender}</p>
      <p>Counter: {counterEmojiFromCurrentRender}</p>
      <button onClick={handleAddBed}>🛌</button>
      <button onClick={handleAddClock}> ⏰</button>
      <button onClick={handleAddFrying}> 🍳</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
