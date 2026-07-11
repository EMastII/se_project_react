import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  handleAddNewClick,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section_title">Your items</p>
        <button
          className="header__add-clothes-btn-profile"
          type="button"
          onClick={handleAddNewClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.length &&
          clothingItems.map((card) => (
            <ItemCard key={card._id} item={card} onCardClick={onCardClick} />
          ))}
      </ul>
    </div>
  );
}
