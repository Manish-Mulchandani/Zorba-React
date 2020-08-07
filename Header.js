import React from "react";   
import "./Header.css";
import{ Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    console.log(basket);

    return (
      
        <nav className="header">
            {/*logo on the left -> img */}
            <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            </Link>

            {/*Search Box */}
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*3 Links*/}
            <div className="header_nav">
                {/*1st Link*/}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? "SignOut" : "SignIn"}</span>
                    </div>
                </Link>

                {/*2nd Link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">&Orders</span>
                    </div>
                </Link>

                {/*3rd Link */}

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/*4th Link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/*Shopping Basket Icon */}
                        <ShoppingBasketIcon/>  
                        {/*Number of items in the basket */}
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

                    </div>

                </Link>

            </div>
            

            
            
        </nav>
    );
}

export default Header;


{/*Just by writing rfce */}
{/*Logo on the left -> img
                Search Box
                Sign in
                Orders
                Prime
                AddtoCart with no.*/}
