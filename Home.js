import React from 'react';
import Product from "./Product"
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        {/*Product id, title, price, rating, image */}
        <div className="home_row">
          <Product 
            id="0001"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={189990}
            rating={5}
            image="https://i.gadgets360cdn.com/products/large/macbook-pro-mvvk2ll-1300x800-1574234594.jpg"
          />
          <Product 
            id="0002"
            title="OnePlus 8 Pro (Glacial Green 8GB RAM+128GB Storage)"
            price={54999}
            rating={4}
            image="https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/news/2020/04/30606/OnePlus-8-Pro_425_735.jpg"
          />
        </div>

        <div className="home_row">
          <Product 
            id="0003"
            title="The Hobbit & The Lord of the Rings Gift Set: A Middle-earth Treasury Hardcover – 19"
            price={2699}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/715bmsBNUuL.jpg"
          />

          <Product 
            id="0004"
            title="A Song of Ice and Fire - A Game of Thrones: The Complete Boxset of 7 Books Paperback"
            price={2998}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91eALN4b61L.jpg"
          />

          <Product 
            id="0005"
            title="Harry Potter Box Set: The Complete Collection (Children’s Paperback) (Set of 7 Volumes)"
            price={2550}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71rOzy4cyAL.jpg"
          />
        </div>

        <div className="home_row">
          <Product 
            id="0006"
            title="Samsung 27 inch (68.6 cm) Curved Bezel Less LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver)"
            price={21490}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BwNw7pmRL._SL1500_.jpg"
          />

        </div>
        
        
        
        {/*Product */}
        
        
        </div>
    );
}

export default Home;
