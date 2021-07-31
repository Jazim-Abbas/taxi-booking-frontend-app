import AddOrRemoveQuantity from "./add-or-remove-quantity";

export default function SingleExtra({ extra, hasQuantity, onUpdateQty }) {
  const className = hasQuantity
    ? "page_two_extra_detail"
    : "page_two_extra_detail_parttwo";

  return (
    <div class={className}>
      <div class="page_two_extra">
        <span>
          <h2>{extra.name}</h2>
          <strong>${extra.price} </strong>
        </span>
        <small>{extra.description} </small>
      </div>
      {hasQuantity && (
        <AddOrRemoveQuantity onUpdateQty={onUpdateQty} extraId={extra.id} />
      )}

      <div class="extra_select_btn">
        <button>Select</button>
      </div>
    </div>
  );
}
