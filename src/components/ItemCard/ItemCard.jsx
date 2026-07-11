import "./ItemCard.css";

function ItemCard({ items, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(items);
  };
  return (
    <li className="card">
      <h2 className="card__name">{items.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={items.imageUrl}
        alt={items.name}
      />
    </li>
  );
}

export default ItemCard;
