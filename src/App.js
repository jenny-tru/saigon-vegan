import { MenuItem } from "./MenuItem";
import "./styles.scss";
import happycow from "./happycow.jpeg";
import yelp from "./yelp.jpg";
import logo from "./sgv-logo.png";
import bkg from "./bkg.jpg";

export default function App() {
  return (
    <div className="App">
      <header className="sgv-header">
        <div className="sgv-nav-header">
          <div><a href="https://goo.gl/maps/oodryCSysbdYLKho9">🗺️ 10522 McFadden Ave. Garden Grove 92843</a></div>
          <div>
            {" "}
            <a href="tel:+16572316607" className="hide-on-mobile">📞 657-231-6607</a>{" "}
          </div>
          <div>
            <a href="https://www.happycow.net/reviews/saigon-vegan-garden-grove-166207">
              <img src={happycow} alt="reviews" id="customer-review" />
            </a>
            <img src={yelp} alt="reviews" id="customer-review" />
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
          <ul className="hide-on-mobile">Home</ul>
          <ul>Photos</ul>
        </nav>
      <div className="sgv-menu">
      <img src={logo} alt="sgv logo" id="logo" />
        <div className="sgv-menu-items">
          <div class="left-column">
            <h2>Appetizers</h2>
            <MenuItem
              price="$7.45"
              en="Portobello Tenders"
              vi="Nấm Chiên"
              description="House-battered portobello served w/ garlic aoli sauce."
            />
            <MenuItem
              price="$7.75"
              en="Egg Rolls"
              vi="Chả Giò"
              description="Hand-rolled w/ taro, impossible beef, mung bean, carrots, glass
            noddle, and mushrooms. Served w/ lettuce, fresh herbs, and vegan fish sauce."
            />
            <MenuItem
              price="$6.75"
              en="Crispy Tofu"
              vi="Đậu Hũ Chiên"
              description="Topped w/ fried onions and green onions. Served w/ house-made plum sauce."
            />
            <h2>On Bread</h2>
            <MenuItem
              price="$10.45"
              en="Vegan Ham & Cheese"
              vi="Bánh Mì Ham & Cheese"
              description="Italian bread topped w/ vegan ham, grilled onions, and melted vegan cheddar."
            />
            <MenuItem
              price="$10.45"
              en="Supreme Pizza"
              vi="Pizza Thập Cẩm"
              description="Italian bread topped w/ vegan sausage, marinara sauce, black olives, grilled onions, red bell pepers, shiitake mushrooms,and vegan mozzarella cheese."
            />
            <MenuItem
              price="$10.75"
              en="Original Philly"
              vi="Bánh Mì Philly"
              description="Italian bread topped w/ impossible beef crumbles, grilled onons, and melted vegan provolone cheese."
            />
            {/* <MenuItem
              price="$12.45"
              en="Italian Vegan Meatballs Sandwhich"
              vi="bánh mì Ý thịt viên"
              description="Italian bread filled w/ meatballs, marinara sauce,imitation provolone; topped w/ parsley and imitation provolone"
            /> */}
            <h2>Drinks</h2>
            <MenuItem
              price="$3.75"
              en="Passion Fruit Juice"
              vi="Nước Ép Chanh Dây"
              description=""
            />
            <MenuItem
              price="$3.75"
              en="⭐Hibiscus Tea w/ Crystal Boba (NEW)"
              vi="Trà Dâm Bụt Với Boba"
              description=""
            />
            <MenuItem
              price="$3.75"
              en="Thai Iced Tea"
              vi="Trà Đá Thái"
              description=""
            />
            <MenuItem
              price="$3.75"
              en="Viet Iced Coffee"
              vi="Cà Phê Sữa Đá"
              description=""
            />
            <MenuItem
              price="$1.25"
              en="Organic Jasmine or Earl Grey Hot/Iced Tea"
              vi="Trà Đá Hay Nóng"
              description=""
            />
            <MenuItem
              price="$1.00"
              en="Pandan Hot/Iced Tea"
              vi="Trà Đá Lá Dứa Hay Nóng"
              description=""
            />
            <MenuItem
              price="$1.50"
              en="Coke or Sprite"
              vi="Cô-ca Cô-la Hay Sprite"
              description=""
            />
            <MenuItem
              price="$1.50"
              en="
              Sparkling Water"
              vi="Nuoc Soda"
              description=""
            />
            {/* <MenuItem
              price="$3.75"
              en=""
              vi=""
              description=""
            /> */}
            <h2>Dessert</h2>
            <MenuItem
              price="$4.95"
              en="Fabulous Flan"
              vi="Bánh Flan"
              description="Rich and creamy house-made vegan custard w/ our coffee caramel sauce."
            />
            </div>
            <div class="right-column">
            <h2>Entrees</h2>
            <div className="new-item">
            <MenuItem
              price="$9.50"
              en="⭐Saigon Noodle Soup (NEW)"
              vi="Hủ Tiếu Mì"
              description="White and yellow noodles , char siu tofu, mushroom, carrots, broccoli, and cabbage. Served in our house-made broth."
            />
            <MenuItem
              price="$9.50"
              en="⭐Orange Cauliflower (NEW)"
              vi="Bông Cải Trắng Sốt Cam"
              description="Breaded cauliflower w/ house-made orange sauce. Served w/ white rice and side salad."
            />
            </div>
            <MenuItem
              price="$10.50"
              en="Pho Noodle Soup"
              vi="Phở Bò Chay"
              description="Vegan beef strips, vegan meatballs, mushroom, scallions, onions, cilantro, and rice noodle in our house-made broth."
            />
            <MenuItem
              price="$10.50"
              en="Royal Noodle Soup"
              vi="Bún Bò Huế"
              description="Vegan beef strips, Vietnamese vegan ham, scallions, cilantro, mushrooms, onions, and rice noodlein our house-made broth."
            />
            <MenuItem
              price="$10.00"
              en="Vermicelli Noodle w/ Soup"
              vi="Bún Riêu"
              description="Our tomato-based noodle soup w/ vermicelli noodles, tomatoes, imitation fish cake, mushroom, tofu, green onions, fried onions,imitation Vietnamese ham, topped w/ cilantro."
            />
            <MenuItem
              price="$10.50"
              en="Pad Thai"
              vi="Mì Pad Thái"
              description="Rice noodle, mushroom, fried tofu, vegan chicken, and house-made sauce. Served w/ steamed bean sprout, carrots, peanuts and lime."
            />
            <MenuItem
              price="$10.45"
              en="Fishless Cake w/ Noodles & Baby Dill"
              vi="Bún Chả Cá Thị Là"
              description="Vermicelli noodle, cripsy fishless cake, bell pepper, onions, dill leaves, roasted peanuts, and vegan fish sauce.
            "
            />
            <MenuItem
              price="$10.45"
              en="House Noodle Soup"
              vi="Hủ Tiếu Nam Vang"
              description="Rice noodle, vegan Chicken and impossible beef, mushroom, tofu, broccoli, carrots, and daikon root.
            "
            />
            <MenuItem
              price="$10.45"
              en="Duckless Noodle Soup"
              vi="Mì Vịt Tiềm"
              description="Yellow noodle soup, mushroom, bok choy, duckless meat, carrots, goji berries."
            />
            <MenuItem
              price="$10.50"
              en="Stir Fry Garlic Noodles"
              vi="Mì Xào Tỏi"
              description="Yellow noodles stir fried w/ vegan beef strips, mushroom, and broccoli. Topped w/ vegan parmesean and parsley."
            />
            <MenuItem
              price="$10.00"
              en="Rice Noodle w/ Tomato Soup"
              vi="Canh Bún"
              description="Rice noodles w/ tomato-based soup, fishless cake, mushroom, water spinach, vegan ham, tofu, and green onions. Topped w/ fried onions and cilantro."
            />
            <MenuItem
              price="$10.45"
              en="House Fried Rice"
              vi="Cơm Chiên"
              description="White rice vegan bacon, green peas, carrots, tofu, vegan chicken, cilantro and green onions."
            />
            <MenuItem
              price="$10.95"
              en="Cripsy Fried Yellow Noodles"
              vi="Mì Xào Dòn"
              description="Crispy chow mein w/ vegan chicken, tofu, green onions, brocolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce."
            />
            <MenuItem
              price="$10.95"
              en="Stir Fried Noodles"
              vi="Mì Xào Mềm"
              description="Lo mein w/ vegan chicken, tofu, green onions, brocolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce."
            />
            <MenuItem
              price="$10.95"
              en="Pan Fried Rice Noodles"
              vi="Phở Áp Chảo"
              description="Fried rice noodle w/ tofu, green onions, brocolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce."
            />
            <MenuItem
              price="$11.45"
              en="BBQ Porkless Vermicelli & Egg Rolls"
              vi="Bún Thịt Nướng + Chả Giò"
              description="Vermicelli noodle w/ eggrolls, shredded vegan pork, green onions, fried onions, bean sprout, and mint leaves. Topped w/ pickled carrots, daikon and peanuts. Served w/ vegan fish sauce."
            />
            <MenuItem
              price="$12.00"
              en="Chicken Curry"
              vi="Cà Ri Gà"
              description="Creamy coconut curry w/ shredded vegan chicken, potatoes, carrots, and green beans. Topped w/ cilantro, and onions. Served w/ choice of rice or baguette."
            />
            <MenuItem
              price="$12.45"
              en="Beef Stew"
              vi="Bò Kho"
              description="Hand-crafted vegan meatballs, potatoes, carrots, kale, and onions. Topped w/ cilantro. Served on a french baguette."
            />
            <MenuItem
              price="$13.00"
              en="Red Wine Meatball Stew"
              vi="Bò Viên Hàm Rượu Đỏ"
              description="Hand-crafted vegan meatballs, asparagus, carrots, onions, and potatoes. Served in a house-made red wine stew and french baugette."
            />
            </div>
        </div>
      </div>
      <footer className="sgv-footer">
      <div className="sgv-nav-header">
      <div><a href="https://goo.gl/maps/oodryCSysbdYLKho9">🗺️ Visit Us</a></div>
          <div>
            {" "}
            <a href="tel:+16572316607">📞 Call Us</a>{" "}
          </div>
          <div>
            <a href="https://www.happycow.net/reviews/saigon-vegan-garden-grove-166207">
              <img src={happycow} alt="reviews" id="customer-review" />
            </a>
            <img src={yelp} alt="reviews" id="customer-review" />
          </div>
        </div>
      </footer>
    </div>
  );
}
