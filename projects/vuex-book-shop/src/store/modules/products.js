export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: 'p1',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    title: 'Book Collection',
                    description:
                        'A collection of must-read books. All-time classics included!',
                    price: 99.99,
                },
                {
                    id: 'p2',
                    image:
                        'http://cdn.shopify.com/s/files/1/0354/1440/9260/products/heksa_outer_side_33a31ea7-48d7-4fa3-ac2b-de14cb6fffbd_grande.jpg?v=1668196072',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 129.99,
                },
                {
                    id: 'p3',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Food Box',
                    description:
                        'May be partially expired when it arrives but at least it is cheap!',
                    price: 6.99,
                },
            ],
        }
    },
    getters: {
        products(currentState) {
            return currentState.products;
        }
    }
}
