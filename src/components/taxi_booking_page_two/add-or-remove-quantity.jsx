import { useState } from "react";

export default function AddOrRemoveQuantity({ onUpdateQty, extraId }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQty = () => {
    setQuantity((prevQty) => prevQty + 1);
    onUpdateQty("increment", extraId);
  };

  const handleDecrementQty = () => {
    let currentQty;
    setQuantity((prevQty) => {
      if (prevQty <= 1) {
        currentQty = prevQty;
        return currentQty;
      } else {
        currentQty = prevQty - 1;
        return currentQty;
      }
    });

    if (currentQty > 1) {
      onUpdateQty("decrement", extraId);
    }
  };

  return (
    <div class="page_two_extra_quantity">
      <span>
        <i class="far fa-plus-square" onClick={handleIncrementQty}></i>
        <i class="far fa-minus-square" onClick={handleDecrementQty}></i>
      </span>
      <strong>{quantity}</strong>
    </div>
  );
}
