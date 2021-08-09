import { useState } from "react";

export default function AddOrRemoveQuantity({ onUpdateQty, extraId }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQty = () => {
    setQuantity((prevQty) => prevQty + 1);
    onUpdateQty("increment", extraId);
  };

  const handleDecrementQty = () => {
    setQuantity((prevQty) => {
      if (prevQty <= 1) return prevQty;
      return prevQty - 1;
    });

    if (quantity > 1) {
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
