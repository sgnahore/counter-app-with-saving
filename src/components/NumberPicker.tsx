import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState("");
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState("");

  const handleAddClock = () => {
    queueRerenderWithNewCounterValue((previousValue) => previousValue + "⏰");
  };

  const handleAddBed = () => {
    queueRerenderWithNewCounterValue((previousValue) => previousValue + " 🛌");
  };

  const handleAddFrying = () => {
    queueRerenderWithNewCounterValue((previousValue) => previousValue + " 🍳");
  };
  const handleStoreCurrentCount = () => {
    queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your stored Emoji: {favouriteValueFromCurrentRender}</p>
      <p>Counter: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddBed}>⏰</button>
      <button onClick={handleAddClock}> 🛌</button>
      <button onClick={handleAddFrying}> 🍳</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
