import { Component } from 'react'

export default class ProductsPage extends Component {
    constructor() { // first time only
        super();

        console.log('Constructor Run Products'); // 1
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log('Did Mount'); // 3
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            console.log(data)
            this.setState({ products: data })
        })
    }

    componentDidUpdate() {
        console.log('Did Update');
    }

    componentWillUnmount() {
        console.log('will unmount from products');
    }

    render() {
        console.log('Render Run || Re-render Run')

        return (
            <div>
                {
                    this.state.products.map((product, index) => {
                        return (
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.title}</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
