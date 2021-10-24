import { MenuItem } from "./MenuItem";
import "./styles.scss";
import happycow from "./happycow.jpeg";
import logo from "./sgv-logo.png";
import bkg from "./bkg.jpg";

export default function App() {
  return (
    <div className="App">
      <header className="sgv-header">
        <div className="sgv-nav-header">
          <div>🗺️ 10522 McFadden Ave. Garden Grove 92843 </div>
          <div>
            {" "}
            <a href="tel:+16572316607">📞 657-231-6607</a>{" "}
          </div>
          <div>
            <a href="https://www.happycow.net/reviews/saigon-vegan-garden-grove-166207">
              <img src={happycow} alt="reviews" id="customer-review" />
            </a>
          </div>
        </div>
    {/* old nav was here */}
      </header>
      <div className="sgv-hero">
        <div className="sgv-hero-inner">
          <h1 className="sgv-hero-heading">
            <small>Welcome to</small>
            <br /> Saigon Vegan <br /> Nhà Hàng Chay
          </h1>
          <p className="sgv-hero-content">
            Join us for delicious Vietnamese plant-based home-style cooking!
            <br /> Vegan Restaurant in Garden Grove!
            <br />
            <br /> <strong>Hours: 11am- 8pm Closed on Tuesdays</strong>
          </p>
          <button className="order-button"><a href="tel:+16572316607">Call to Order Now </a>{" "}</button>
        </div>
      </div>
      <nav className="sgv-nav-list">
          <ul>Home</ul>
          <ul>Photos</ul>
          <ul className="hide-on-mobile">Order Online</ul>
        </nav>
      <div className="sgv-menu">
      <img src={logo} alt="sgv logo" id="logo" />
        <div className="sgv-menu-items">
          <ol>
            <h2>Shareable</h2>
            <MenuItem
              en="Portobello Tenders"
              vi="Nấm"
              description="House-battered portobello served with garlic aoli sauce"
            />
            <MenuItem
              en="Egg Rolls"
              vi="Chả Giò"
              description="Hand-rolled with taro, impossible beef, mung bean, carrots, glass
            noddle, and mushroom. Served with lettuce, fresh herbs, and fish
            sauce"
            />
            <MenuItem
              en="Crispy Tofu"
              vi="Dậu Phụ Giòn"
              description="Topped with fried onions and green onions. Served with house-made
            plum sauce"
            />
            <h2>On Bread</h2>

            <MenuItem
              en="Ham and Cheese"
              vi="bánh mì kẹp thịt nguội và pho mát"
              description="Italian bread topped with imitation ham, grilled onions, and
            melted imitation cheddar"
            />
            <MenuItem
              en="Supreme Pizza"
              vi="Bánh Pizza"
              description="Italian bread topped with imitation sausage, marinara sauce, black
            olives, grilled onions, red bell pepers, shiitake mushrooms,and
            imitation mozzarella cheese"
            />
            <MenuItem
              en="Original Philly"
              vi="bánh sandwich philly"
              description="Italian bread topped with impossible beef crumbles, grilled inons, and melted imitation provolone cheese"
            />
            <MenuItem
              en="Italian Meatballs Sandwhich"
              vi="bánh mì Ý thịt viên"
              description="Italian bread filled with meatballs, marinara sauce,imitation provolone; topped with parsley and imitation provolone"
            />
            <h2>Entrees</h2>
            <MenuItem
              en="Rice Noodle Soup"
              vi="Phở"
              description="Imitation beef strips, imitation meatballs, tendon, snow mushroom, scallions, onions, cilantro, and rice noodle in our house-madebroth"
            />
            <MenuItem
              en="Spicy Noodle Soup"
              vi="Bún Bò Huế"
              description="Imitation beef strips, Vietnamese imitation ham, tendons, scallions, cilantro, shiitake mushrooms, onions, and rice noodlein our spicy house-made broth"
            />
            <MenuItem
              en="Vermicelli Noodle Soup"
              vi="Bún Riêu"
              description="Our rice noodle soup with vermicelli noodles, tomatoes, imitation fish cake, oyster mushroom, tofu, green onions, fried onions,imitation Vietnamese ham, topped with cilantro"
            />
            <MenuItem
              en="Pad Thai"
              vi="mì Thái"
              description="Rice noodle, mushroom, fried tofu, imitation beef or Chicken, and house-made sauce. Served with steamed bean sprout, carrots, andpeanuts and lime"
            />
            <MenuItem
              en="Dill Fish Noodle Soup"
              vi="Bún chả cá Thị Là"
              description="vermicelli noodle, cripsy fishless cake, bell pepper, onions, dill leaves, roasted peanuts, and fish sauce
            "
            />
            <MenuItem
              en="Hu Tieu Nam Vang"
              vi="Hủ Tiếu Nam Vang"
              description="Rice noodle, Imitation Chicken or beef, mushroom, tofu, carrots, and daikon root
            "
            />
            <MenuItem
              en="Duck Noodle Soup"
              vi="Mì Vịt Tiềm"
              description="Rice noodle soup with tomatoes, imitation fish cake, oyster mushroom,water spinach, Vietnamese imitation ham, tofu, green onions, fried onions, topped with cilantro"
            />
            <MenuItem
              en="Fried Rice"
              vi="Cơm Chiên"
              description="White rice imitation bacon, green peas, carrots, tofu, imitation chicken bites, cilantro and green onions"
            />
            <MenuItem
              en="Cripsy Fried Noodle"
              vi="Mì Xào Giòn"
              description="Crispy chow mein with imitation chicken, rofu, ,green onions, brocolli, bok choy, carrots, chinese spinach, shiitake mushroom, and oyster sauce"
            />
            <MenuItem
              en="Sauteed Noodles"
              vi="Mì Xào Mềm"
              description="Chow mein with imitation chicken, rofu, ,green onions, brocolli, bok choy, carrots, chinese spinach, shiitake mushroom, and oyster sauce"
            />
            <MenuItem
              en="Pan Fried Noodle"
              vi="Phở Áp Chảo"
              description="n/a"
            />
            <MenuItem
              en="Grilled Beef Noodles + Egg Rolls"
              vi="Bún Thịt Nướng + Chả Giò"
              description="BBQ noodle bowl with vermicelli noodle, eggrolls, grilled bean curd, shredded imitation pork, green onions, fried onions; topped with pickled veggies, bean sprout, mint leaves, and peanuts; served with fish sauce"
            />
            <MenuItem
              en="Chicken Curry Stew"
              vi="Gà hầm cà ri"
              description="shredded imitation chicken, potatoes, carrots, green beans, cilantro, and onions in our creamy coconut curry sauce; served with french baguette"
            />
            <MenuItem
              en="Beef Stew"
              vi="thịt bò hầm"
              description="Hand-crafted imitation meatballs, potatoes carrots kale, cilantro, and onions inside a french baguette"
            />
            <MenuItem
              en="Red Wine Meatball Stew"
              vi="Hầm thịt viên rượu vang đỏ"
              description="Hand-crafted imitation meatballs, asparagus, carrots, onions, and potatoes"
            />
            <h2>Drinks</h2>
            <li>Vietnamese Iced Coffee</li>
            <li>Passion Fruit Juice</li>
            <li>Thai Iced Tea</li>
            <li>Organic Hot/Iced tea</li>
            <li>Coke</li>
            <li>Sparkling Water </li>
            <h2>Dessert</h2>
            <MenuItem
              en="Fabulous Flan"
              vi="bánh flan"
              description="Rich and creamy house-made custard with our coffee caramel sauce"
            />
          </ol>
        </div>
      </div>
      <footer className="sgv-footer">
      <div className="sgv-nav-header">
          <div>🗺️ 10522 McFadden Ave. Garden Grove 92843 </div>
          <div>
            {" "}
            <a href="tel:+16572316607">📞 657-231-6607</a>{" "}
          </div>
          <div>
            <a href="https://www.happycow.net/reviews/saigon-vegan-garden-grove-166207">
              <img src={happycow} alt="reviews" id="customer-review" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
