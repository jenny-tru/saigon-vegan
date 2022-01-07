import { useState } from 'react';

const MenuItemPhoto = ({ src }) => {
  const [view, setView] = useState('small')
  return (
    <div className="item-photo" data-view={view} onClick={() => {
      setView(view === 'small' ? 'big' : 'small')
    }}>
      <img src={src} />
    </div>
  )
}

export const MenuItem = ({ en, vi, description, price, photo, special }) => {
  return (
    <div className={`item ${special ? 'new-item' : ''}`}>
      {photo && <MenuItemPhoto src={photo} />}
      <div className="item-en">
        <div>{en}</div>
        <div className="price">{price}</div>
      </div>
      <div className="item-vi">{vi}</div>
      <p className="item-description">{description}</p>
    </div>
  );
};
