export const MenuItem = ({ en, vi, description, price, photo }) => {
  return (
    <div className="item">
      {photo && <img className="item-photo" src={photo} />}
      <div className="item-en">
        <div>{en}</div>
        <div className="price">{price}</div>
      </div>
      <div className="item-vi">{vi}</div>
      <p className="item-description">{description}</p>
    </div>
  );
};
