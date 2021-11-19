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
            <a href="tel:+16572316607">📞 657-231-6607</a>{" "}
          </div>
          <div>
            <a href="https://www.happycow.net/reviews/saigon-vegan-garden-grove-166207">
              <img src={happycow} alt="reviews" id="customer-review" />
            </a>
            <a href="https://www.yelp.com/biz/saigon-vegan-garden-grove-2">
            <img src={yelp} alt="reviews" id="customer-review" />
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
          </p>
          <button className="order-button"><a href="tel:+16572316607">Call to Order Now </a>{" "}</button>
        </div>
      </div>
      <div className="hours">
      <strong>Hours: 11am- 8pm Closed on Tuesdays</strong>
      </div>
      <div className="sgv-menu" style={{'--bkg': `url(${bkg})`}}>
      <img src={logo} alt="sgv logo" id="logo" />
        <div className="sgv-menu-items">
          <div class="left-column">
            <h2>Appetizers</h2>
            <MenuItem
              price="$7.45"
              en="Portobello Tenders"
              vi="Nấm Chiên"
              description="House-battered portobello served w/ garlic aoli sauce."
              photo={process.env.PUBLIC_URL + "/photos/nam-chien.jpg"}
            />
            <MenuItem
              price="$7.75"
              en="Egg Rolls"
              vi="Chả Giò"
              description="Hand-rolled w/ taro, impossible beef, mung bean, carrots, glass
            noodle, and mushrooms. Served w/ lettuce, fresh herbs, and vegan fish sauce."
            photo={process.env.PUBLIC_URL + "/photos/cha-gio.jpg"}
            />
            <MenuItem
              price="$6.75"
              en="Crispy Tofu"
              vi="Đậu Hũ Chiên"
              description="Topped w/ fried onions and green onions. Served w/ house-made plum sauce."
              photo={process.env.PUBLIC_URL + "/photos/crispy-tofu.jpg"}
              />
            <h2>On Bread</h2>
            <MenuItem
              price="$10.45"
              en="Vegan Ham & Cheese"
              vi="Bánh Mì Ham & Cheese"
              description="Ciabatta bread topped w/ vegan ham, grilled onions, and melted vegan cheddar and parmesan. Served with a side salad."
              photo={process.env.PUBLIC_URL + "/photos/ham-cheese.jpg"}
              />
            <MenuItem
              price="$10.75"
              en="Original Philly"
              vi="Bánh Mì Philly"
              description="Ciabatta bread topped w/ impossible beef crumbles, grilled onons, and melted vegan provolone and mozzarella cheese. Served with a side salad."
              photo={process.env.PUBLIC_URL + "/photos/philly.jpg"}/>
            <h2>Drinks</h2>
            <MenuItem
              price="$3.75"
              en="⭐Hibiscus Tea w/ Crystal Boba (NEW)"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/hibiscus-tea.jpg"}
            />
            <MenuItem
              price="$3.75"
              en="Passion Fruit Juice"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/passion-tea.jpg"}
            />
            <MenuItem
              price="$3.75"
              en="Thai Iced Tea"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/thai-tea.jpg"}
            />
            <MenuItem
              price="$3.75"
              en="Viet Iced Coffee"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/coffee.jpg"}
            />
            <MenuItem
              price="$1.25"
              en="Organic Jasmine or Earl Grey Hot/Iced Tea"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/tea.jpg"}
            />
            <MenuItem
              price="$1.00"
              en="Pandan Hot/Iced Tea"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/pandan-tea.jpg"}
            />
            <MenuItem
              price="$1.50"
              en="Can of Sprite, Coke, or Diet Coke"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/soda-can.jpg"}
            />
            <MenuItem
              price="$1.25"
              en="
              Bottle Water"
              vi=""
              description=""
              photo={process.env.PUBLIC_URL + "/photos/water.jpg"}
            />
            <h2>Sides</h2>
            <MenuItem
              price="$1.25"
              en="Baguette"
              vi="Bánh Mì"
              description=""
            />
            <MenuItem
              price="$1.00"
              en="White Rice"
              vi="Cơm Trắng"
              description=""
            />
            <MenuItem
              price="$1.25"
              en="Brown Rice"
              vi="Cơm Lức"
              description=""
            />
            <MenuItem
              price="$1.50"
              en="Extra Noodles"
              vi="Bún/ Mì/ Hủ Tiếu"
              description=""
            />
            <MenuItem
              price="$2.00"
              en="Vegan Ham"
              vi="Chả Lụa Chay"
              description=""
            />
            <MenuItem
              price="$2.00"
              en="Tofu"
              vi="Đậu Hũ"
              description=""
            />
            <MenuItem
              price="$1.50"
              en="Water Spinach"
              vi="Rau Muống"
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
              photo={process.env.PUBLIC_URL + "/photos/flan.jpg"}/>
            </div>
            <div class="right-column">
            <h2>Entrees</h2>
            <p>**Gluten Free available upon request**</p>
            <div className="new-item">
            <MenuItem
              price="$9.50"
              en="⭐Saigon Noodle Soup (NEW)"
              vi="Hủ Tiếu Mì"
              description="White and yellow noodles, char siu tofu, mushroom, carrots, broccoli, and cabbage. Served in our house-made vegetable broth."
              photo={process.env.PUBLIC_URL + "/photos/hu-tieu-mi.jpeg"}
              />
            <MenuItem
              price="$9.50"
              en="⭐Orange Cauliflower (NEW)"
              vi="Bông Cải Trắng Sốt Cam"
              description="Breaded cauliflower w/ house-made orange sauce. Served w/ white rice and side salad."
              photo={process.env.PUBLIC_URL + "/photos/orange-cauliflower.jpg"}
              />
            </div>
            <MenuItem
              price="$10.50"
              en="Pho Noodle Soup"
              vi="Phở Bò Chay"
              description="Vegan beef strips, vegan meatballs, tofu, mushroom, scallions, onions, cilantro, and rice noodle in our house-made pho broth."
              photo={process.env.PUBLIC_URL + "/photos/pho.jpg"}
              />
            <MenuItem
              price="$10.50"
              en="Royal Noodle Soup"
              vi="Bún Bò Huế"
              description="Vegan beef strips, Vietnamese vegan ham, vegan meatballs, tofu, scallions, cilantro, mushrooms, onions, and rice noodle in our house-made broth."
              photo={process.env.PUBLIC_URL + "/photos/bun-bo-hue.jpg"}
              />
            <MenuItem
              price="$10.00"
              en="Vermicelli Noodle w/ Soup"
              vi="Bún Riêu"
              description="Our tomato-based noodle soup w/ vermicelli noodles, tomatoes, tofu paste, mushroom, tofu, green onions, fried onions, and topped w/ cilantro."
              photo={process.env.PUBLIC_URL + "/photos/bun-rieu.jpg"}/>
            <MenuItem
              price="$10.50"
              en="Pad Thai"
              vi="Mì Pad Thái"
              description="Rice noodle, mushroom, fried tofu, vegan chicken, and house-made sauce. Served w/ steamed bean sprout, carrots, peanuts and lime."
              photo={process.env.PUBLIC_URL + "/photos/pad-thai.jpg"}
              />
            <MenuItem
              price="$10.45"
              en="Fishless Cake w/ Noodles & Baby Dill"
              vi="Bún Chả Cá Thì Là"
              description="Vermicelli noodle, crispy fishless cake, bell pepper, onions, dill leaves, roasted peanuts, and vegan fish sauce."
              photo={process.env.PUBLIC_URL + "/photos/bun-cha-ca.jpg"}
            />
            <MenuItem
              price="$10.45"
              en="House Noodle Soup"
              vi="Hủ Tiếu Nam Vang"
              description="Rice noodle, vegan chicken and impossible beef, mushroom, tofu, broccoli, and carrots."
              photo={process.env.PUBLIC_URL + "/photos/hu-tieu-nam-vang.jpg"}
            />
            <MenuItem
              price="$10.45"
              en="Duckless Noodle Soup"
              vi="Mì Vịt Tiềm"
              description="Yellow noodles, mushroom, bok choy, duckless meat, carrots, and goji berries in our house-made herbal soup broth."
              photo={process.env.PUBLIC_URL + "/photos/mi-vit-tiem.jpg"}
              />
            <MenuItem
              price="$10.50"
              en="Stir Fry Garlic Noodles"
              vi="Mì Xào Tỏi"
              description="Yellow noodles stir fried w/ vegan beef strips, mushroom, and broccoli. Topped w/ vegan parmesan and parsley."
              photo={process.env.PUBLIC_URL + "/photos/mi-xao-toi.jpg"}/>
            <MenuItem
              price="$10.00"
              en="Rice Noodle w/ Tomato Soup"
              vi="Canh Bún"
              description="Rice noodles w/ tomato-based soup, tofu paste, mushroom, water spinach, vegan ham, tofu, and green onions. Topped w/ fried onions and cilantro."
              photo={process.env.PUBLIC_URL + "/photos/canh-bun.jpg"}
              />
            <MenuItem
              price="$10.45"
              en="House Fried Rice"
              vi="Cơm Chiên"
              description="White rice w/ vegan bacon, green peas, carrots, tofu, vegan chicken, cilantro and green onions."
              photo={process.env.PUBLIC_URL + "/photos/com-chien.jpg"}
              />
            <MenuItem
              price="$10.95"
              en="Crispy Fried Chow Mein"
              vi="Mì Xào Dòn"
              description="Crispy chow mein w/ vegan chicken, tofu, green onions, broccolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce."
              photo={process.env.PUBLIC_URL + "/photos/mi-xao-don.jpg"}
              />
            <MenuItem
              price="$10.95"
              en="Stir Fried Noodles"
              vi="Mì Xào Mềm"
              description="Lo mein w/ vegan chicken, tofu, green onions, broccolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce."
              photo={process.env.PUBLIC_URL + "/photos/mi-xao-mem.jpg"}/>
            <MenuItem
              price="$10.95"
              en="Pan Fried Rice Noodles"
              vi="Phở Áp Chảo"
              description="Choice of crispy or soft noodle. Rice noodle dish w/ tofu, green onions, broccolli, bok choy, carrots, chinese spinach, mushroom, and vegan oyster sauce."
              photo={process.env.PUBLIC_URL + "/photos/pho-ap-chao-both.jpg"}/>
            <MenuItem
              price="$11.45"
              en="BBQ Porkless Vermicelli & Egg Rolls"
              vi="Bún Thịt Nướng + Chả Giò"
              description="Vermicelli noodle w/ eggrolls, shredded vegan pork (combination of taro, tofu, jicama), green onions, fried onions, bean sprout, and mint leaves. Topped w/ pickled carrots, daikon and peanuts. Served w/ vegan fish sauce."
              photo={process.env.PUBLIC_URL + "/photos/bun-thit-nuong.jpg"}
            />
            <MenuItem
              price="$12.00"
              en="Chicken Curry"
              vi="Cà Ri Gà"
              description="Creamy coconut curry w/ shredded vegan chicken, tofu, potatoes, carrots, and green beans. Topped w/ cilantro. Served w/ choice of rice or baguette."
              photo={process.env.PUBLIC_URL + "/photos/ca-ri-ga.jpg"}
            />
            <MenuItem
              price="$12.45"
              en="Beef Stew"
              vi="Bò Kho"
              description="Vegan meatballs, potatoes, carrots, and kale. Topped w/ cilantro. Served on a french baguette."
              photo={process.env.PUBLIC_URL + "/photos/bo-kho.jpg"}
            />
            <MenuItem
              price="$13.00"
              en="Red Wine Meatball Stew"
              vi="Bò Viên Hâm Rượu Đỏ"
              description="Vegan meatballs (contains onion), asparagus, carrots, and potatoes. Served in a house-made red wine stew and french baguette."
              photo={process.env.PUBLIC_URL + "/photos/bo-vien-ham-ruou-do.jpg"}
              />
            </div>
        </div>
      </div>
      <footer className="sgv-footer">
      <div className="sgv-nav-footer">
      <div><a href="https://goo.gl/maps/oodryCSysbdYLKho9">🗺️ Visit Us</a></div>
          <div>
            {" "}
            <a href="tel:+16572316607">📞 Call Us</a>{" "}
          </div>
        </div>
      </footer>
    </div>
  );
}
