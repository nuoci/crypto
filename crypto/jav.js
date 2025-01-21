// 選取表單和商品容器
const productForm = document.getElementById('product-form');
const productContainer = document.getElementById('product-container');

// 動態商品資料儲存
let products = [];

// 表單提交事件
productForm.addEventListener('submit', (e) => {
    e.preventDefault(); // 防止頁面重新載入

    // 獲取表單數據
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = parseFloat(document.getElementById('product-price').value).toFixed(2);

    // 將新商品添加到商品列表
    products.push({ name, description, price });

    // 清空表單
    productForm.reset();

    // 更新商品顯示
    renderProducts();
});

// 渲染商品列表
function renderProducts() {
    productContainer.innerHTML = ''; // 清空現有商品
    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('fold-item');

        productItem.innerHTML = `
            <div class="fold-header">${product.name}</div>
            <div class="fold-content">
                <h3>Product Description</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;

        // 添加折疊功能
        productItem.querySelector('.fold-header').addEventListener('click', () => {
            const content = productItem.querySelector('.fold-content');
            content.classList.toggle('active');
        });

        productContainer.appendChild(productItem);
    });
}

// 刪除商品
function deleteProduct(index) {
    products.splice(index, 1); // 移除指定商品
    renderProducts(); // 重新渲染
}
