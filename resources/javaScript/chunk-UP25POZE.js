// src/components/Header/Header.ts
var Header = () => {
  return `
        <header class="app-header content-wrapper">
            <h2 class="logo"><a href="/index.html">3legant<span class="neutral-04-formatted-text">.</span></a></h2>
            <nav class="pages-nav">
                <ul>
                    <li class="active"><a href="/index.html">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        
            <nav class="account-nav">
                <ul>
                    <li class="search">
                        <button><img src="/resources/images/search-icon.svg" alt="search-icon"></button>
                    </li>
                    <li class="profile">
                        <button><img src="/resources/images/profile-icon.svg" alt="profile-icon"></button>
                    </li>
                    <li class="cart">
                        <button id="open-cart-btn">
                            <img src="/resources/images/shopping-bag.svg" alt="cart-icon">
                            <span class="cart-content-count">2</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    `;
};

export {
  Header
};
