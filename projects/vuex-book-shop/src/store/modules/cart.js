export default {
    namespaced: true,
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    mutations: {
        addProductToCart(currentState, productPayload) {

            const productInCartIndex = currentState.items.findIndex(
                (ci) => ci.productId === productPayload.id
            );

            if (productInCartIndex >= 0) {
                currentState.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productPayload.id,
                    title: productPayload.title,
                    image: productPayload.image,
                    price: productPayload.price,
                    qty: 1,
                };
                currentState.items.push(newItem);
            }
            currentState.qty++;
            currentState.total += productPayload.price;
        },

        removeProductFromCart(currentState, payloadId) {
            const productInCartIndex = currentState.items.findIndex(
                (cartItem) => cartItem.productId === payloadId
            );
            const prodData = currentState.items[productInCartIndex];

            currentState.items.splice(productInCartIndex, 1);
            currentState.qty -= prodData.qty;
            currentState.total -= prodData.price * prodData.qty;
        },
    },
    actions: {
        addToCartAction(context, payloadId) {
            // context - access to other parts of Vux Store
            // from root getter we can access to other namespaced getters from other stores modules
            const productsFromProductsStoreModule = context.rootGetters['productsStoreNamespace/products'];
            const product = productsFromProductsStoreModule.find(prod => prod.id === payloadId);

            context.commit('addProductToCart', product);
        },
        removeFromCartAction(context, payload) {
            context.commit('removeProductFromCart', payload)
        },
    },
    getters: {
        products(currentState) {
            return currentState.items;
        },
        totalSum(currentState) {
            return currentState.total;
        },
        quantity(currentState) {
            return currentState.qty;
        },
    }
}
