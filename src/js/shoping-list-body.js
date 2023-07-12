// автор Євгенія

const NAME_STORAGE = 'shopping-list';

const shopingListBooksRef = document.querySelector('.shoping_list_books');

const shopingListArrey = JSON.parse(localStorage.getItem(NAME_STORAGE)) ?? [];

if (!shopingListBooksRef) {
  return;
}

function createMarkupShoppingList(arrey, list) {
  let markup;
  if (arrey.length) {
    markup = arrey
      .map(
        ({
          _id,
          book_image,
          list_name,
          title,
          description,
          author,
          buy_links,
        }) => `<li class="shoping-list-book-card" data-id="${_id}">
            <div class="book-card">
                <img class="book-cover" src="${book_image}" alt="${title}" />
                <div class="book-info">
                    <h3 class="book-title">${title}</h3>
                    <p class="book-category">${list_name}</p>
                    <p class="book-description">
                      ${description}
                    </p>
                    <p class="book-author">${author}</p>
                    <button class="trash-thumb" type="button">
                        <svg class="icon trash">
                            <use class="icon-cart" href="${iconCart}#icon-trash-03"></use>
                        </svg>
                    </button>
                    <ul class="book-stores">
                        <li>
                            <a href="${buy_links[0].url}">
                                <img class="icon-store amazon" src="${amazonIcon}" alt="Book cover" /></a>
                        </li>
                        <li>
                            <a href="${buy_links[1].url}"><img class="icon-store apple-book" src="${appleBookIcon}" alt="Book cover" /></a>
                        </li>
                        <li>
                            <a href="${buy_links[4].url}"><img class="icon-store book-shop" src="${bookshopIcon}" alt="Book cover" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>`
      )
      .join('');
  } else {
    markup = `<div class="shoping_list_box">
        <p class="shoping_list_text">This page is empty, add some books and proceed to order.</p>
        <img class="shoping_list_image" src="${booksShopingList}" alt="books">
    </div>`;
  }
  list.innerHTML = markup;
}

createMarkupShoppingList(shopingListArrey, shopingListBooksRef);
