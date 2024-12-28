// src/components/Card/Card.ts
var Card = (product) => {
  return `
        <li>
           <article class="product-card">
               <div class="content">
                   <ol class="rating-group">
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                       <li></li>
                   </ol>

                   ${product.title == null ? "" : `<h4 class="product-title">${product.title}</h4>`}

                   <div class="price-section">
                       <p class="active-price">$${product.activePrice}</p>
                       ${product.oldPrice == null ? "" : `<p class="old-price">$${product.oldPrice}</p>`}
                   </div>
               </div>

               <div class="card">
                   <div class="card-top-section">
                       <ul class="info-labels">
                           ${product.isNew == null && product.isNew == true ? "" : `<li class="new-product-label">new</li>`}
                           ${product.salePercent == null ? "" : `<li class="sale-product-label">-${product.salePercent}%</li>`}
                       </ul>
                       <button class="add-to-watchlist"></button>
                   </div>

                   <button class="add-to-cart-btn">Add to cart</button>

                   ${product.imageSrc == null ? "" : `<img class="card-image" src="${product.imageSrc}" alt="${product.title}">`}
               </div>
           </article>
       </li>`;
};

export {
  Card
};
