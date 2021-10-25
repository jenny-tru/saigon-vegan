export const MenuItem = ({ en, vi, description }) => {
  return (
    <div className="item">
      <div className="item-en">{en}</div>
      <div className="item-vi">{vi}</div>
      <p className="item-description">{description}</p>
    </div>
  );
};
