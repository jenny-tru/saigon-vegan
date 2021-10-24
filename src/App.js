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
            <h2>Appetizer</h2>
            <MenuItem
              en="Portobello Tenders"
              vi="Nấm Chiên"
              description="House-battered portobello served with garlic aoli sauce"
            />
            <MenuItem
              en="Egg Rolls"
              vi="Chả Giò"
              description="Hand-rolled with taro, impossible beef, mung bean, carrots, glass
            noddle, and mushrooms. Served with lettuce, fresh herbs, and vegan fish sauce"
            />
            <MenuItem
              en="Crispy Tofu"
              vi="Dậu Phụ Chiên"
              description="Topped with fried onions and green onions. Served with house-made
            plum sauce"
            />
            <h2>On Bread</h2>
            <MenuItem
              en="Vegan Ham and Cheese"
              vi="bánh mì ham and cheese"
              description="Italian bread topped with vegan ham, grilled onions, and
            melted vegan cheddar"
            />
            <MenuItem
              en="Supreme Pizza"
              vi="Pizza Thập Cẩm"
              description="Italian bread topped with vegan sausage, marinara sauce, black
            olives, grilled onions, red bell pepers, shiitake mushrooms,and
            vegan mozzarella cheese"
            />
            <MenuItem
              en="Original Philly"
              vi="bánh mì philly"
              description="Italian bread topped with impossible beef crumbles, grilled onons, and melted vegan provolone cheese"
            />
            {/* <MenuItem
              en="Italian Vegan Meatballs Sandwhich"
              vi="bánh mì Ý thịt viên"
              description="Italian bread filled with meatballs, marinara sauce,imitation provolone; topped with parsley and imitation provolone"
            /> */}
            <h2>Entrees</h2>
            <MenuItem
              en="Pho Noodle Soup"
              vi="Phở bò chay"
              description="Vegan beef strips, vegan meatballs, mushroom, scallions, onions, cilantro, and rice noodle in our house-made broth"
            />
            <MenuItem
              en="Royal Noodle Soup"
              vi="Bún Bò Huế"
              description="Vegan beef strips, Vietnamese vegan ham, scallions, cilantro, mushrooms, onions, and rice noodlein our house-made broth"
            />
            <MenuItem
              en="Vermicelli Noodle with Soup"
              vi="Bún Riêu"
              description="Our tomato-based noodle soup with vermicelli noodles, tomatoes, imitation fish cake, mushroom, tofu, green onions, fried onions,imitation Vietnamese ham, topped with cilantro"
            />
            <MenuItem
              en="Pad Thai"
              vi="Mì Pat Thái"
              description="Rice noodle, mushroom, fried tofu, vegan chicken, and house-made sauce. Served with steamed bean sprout, carrots, peanuts and lime"
            />
            <MenuItem
              en="Fishless Cake with Noodles and Baby Dill"
              vi="Bún chả cá Thị Là"
              description="Vermicelli noodle, cripsy fishless cake, bell pepper, onions, dill leaves, roasted peanuts, and vegan fish sauce.
            "
            />
            <MenuItem
              en="House Noodle Soup"
              vi="Hủ Tiếu Nam Vang"
              description="Rice noodle, vegan Chicken and impossible beef, mushroom, tofu, broccoli, carrots, and daikon root.
            "
            />
            <MenuItem
              en="Duckless Noodle Soup"
              vi="Mì Vịt Tiềm"
              description="Yellow noodle soup, mushroom, bok choy, duckless meat, carrots, gogi berries"
            />
            <MenuItem
              en="Stir Fry Garlic Noodles"
              vi="Mì Xào Tỏi"
              description="Yellow noodles stir fried with vegan beef strips, mushroom, and broccoli. Topped with vegan parmesean and parsley"
            />
            <MenuItem
              en="Rice Noodle with Tomato Soup"
              vi="Canh Bún"
              description="Rice noodles with tomato-based soup, fishless cake, mushroom, water spinach, vegan ham, tofu, and green onions. Topped with fried onions and cilantro"
            />
            <MenuItem
              en="House Fried Rice"
              vi="Cơm Chiên"
              description="White rice vegan bacon, green peas, carrots, tofu, vegan chicken, cilantro and green onions"
            />
            <MenuItem
              en="Cripsy Fried Yellow Noodles"
              vi="Mì Xào Giòn"
              description="Crispy chow mein with vegan chicken, tofu, ,green onions, brocolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce"
            />
            <MenuItem
              en="Stir Fried Noodles"
              vi="Mì Xào Mềm"
              description="Lo mein with vegan chicken, tofu, ,green onions, brocolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce"
            />
            <MenuItem
              en="Pan Fried Rice Noodles"
              vi="Phở Áp Chảo"
              description="Fried rice noodle with tofu, ,green onions, brocolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce"
            />
            <MenuItem
              en="BBQ Porkless Vermicelli + Egg Rolls"
              vi="Bún Thịt Nướng + Chả Giò"
              description="Vermicelli noodle with eggrolls, shredded vegan pork, green onions, fried onions, bean sprout, and mint leaves. Topped with pickled carrots, daikon and peanuts. Served with vegan fish sauce"
            />
            <MenuItem
              en="Chicken Curry"
              vi="Cà Ri Gà"
              description="Creamy coconut curry with shredded vegan chicken, potatoes, carrots, and green beans. Topped with cilantro, and onions. Served with choice of rice or baguette"
            />
            <MenuItem
              en="Beef Stew"
              vi="Bò Kho"
              description="Hand-crafted vegan meatballs, potatoes, carrots, kale, and onions. Topped with cilantro. Served on a french baguette"
            />
            <MenuItem
              en="Red Wine Meatball Stew"
              vi="bò viên hàm rượu đỏ"
              description="Hand-crafted vegan meatballs, asparagus, carrots, onions, and potatoes. Served in a house-made red wine stew and french baugette"
            />
            <MenuItem
              en="Saigon Noodle Soup"
              vi="hủ tiếu Mì"
              description="White and yellow noodles , char siu tofu, mushroom, carrots, broccoli, and cabbage. Served in our house-made broth."
            />
            <MenuItem
              en="Orange Cauliflower"
              vi="Bông Cải Trắng Sốt Cam"
              description="Breaded cauliflower with house-made orange sauce. Served with white rice and side salad."
            />
            <h2>Drinks</h2>
            <li>Passion Fruit Juice</li>
            <li>Hisbiscus Tea with Crystal Boba</li>
            <li>Thai Iced Tea</li>
            <li>Vietnamese Iced Coffee</li>
            <li>Jasmine or Earl Grey Hot/Iced tea</li>
            <li>Pandan Hot/Iced Tea</li>
            <li>Coke or Sprite</li>
            <li>Sparkling Water</li>
            <h2>Dessert</h2>
            <MenuItem
              en="Fabulous Flan"
              vi="Bánh Flan"
              description="Rich and creamy house-made vegan custard with our coffee caramel sauce"
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
