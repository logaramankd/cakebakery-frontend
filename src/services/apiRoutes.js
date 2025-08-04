const API_ROUTES = {
    // 🔐 Auth
    AUTH: {
        REGISTER: "/auth/register",
        LOGIN: "/auth/login",
    },

    // 🧁 Products
    PRODUCTS: {
        ALL: "/product",
        BY_ID: (id) => `/product/${id}`,
        CREATE: "/product",
        UPDATE: (id) => `/product/${id}`,
        DELETE: (id) => `/${id}`, // product ID
        UPDATE_VARIANTS: (id) => `/product/${id}/variants`,
        DELETE_VARIANT: (productId, variantId) =>
            `/product/${productId}/variants/${variantId}`,
    },

    // 📂 Categories
    CATEGORIES: {
        GET_ALL: "/categories",
        CREATE: "/category",
        UPDATE: (id) => `/category/${id}`,
        DELETE: (id) => `/category/${id}`,
    },
    SUBCATEGORIES: {
        CREATE: "/subcategory",
        GET: "/subcategories",
        UPDATE: (id) => `/subcategory/${id}`,
        DELETE: (id) => `/subcategory/${id}`,
    },

    // ➕ Addons
    ADDONS: {
        CREATE: "/addons",
        GET_ALL: "/addons",
        BY_ID: (id) => `/addons/${id}`,
        UPDATE: (id) => `/addons/${id}`,
        DELETE: (id) => `/addons/${id}`,
    },

    // 🛒 Cart
    CART: {
        ADD: "/cart",
        GET_USER_CART: "/cart",
        REMOVE_ITEM: (id) => `/cart/${id}`,
    },

    // 📦 Orders (Customer)
    ORDERS: {
        PLACE: "/orders",
        GET_USER_ORDERS: "/orders",
        UPDATE_STATUS: (orderId) => `/orders/${orderId}/status`,
    },

    // 🛠️ Admin Orders
    ADMIN_ORDERS: {
        ALL: "/admin/orders",
        BY_ID: (id) => `/admin/orders/${id}`,
        FILTER: "/admin/filter-orders",
    },
};

export default API_ROUTES;
