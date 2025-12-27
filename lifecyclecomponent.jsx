/*
    * (VIP) *

    * Component Lifecycle: class component
    1. Mounting:
        - component inserted into dom
        * Constructor method:
            - is the first method to call when component inserted into dom one time only not running with re-render (best place to hold states)
        * Render method:
            - return jsx code into component
        * componentDidMount Method:
            - method runs after component render

    2. Updating:
        * componentDidUpdate Method:
            - method will run after update states or props and will run after re-render too
            - never write apis here it will make infinite rendering

    3. Unmounting:
        * componentWillUnmount Method:
            - method will run when component removed from dom

    * Ex:
            import { Component } from 'react';

            class HomePage extends Component {  // first run
                constructor(props) {
                    super(props);
                    
                    this.state = {
                        counter: 0,
                        products: []
                    }

                    console.log('Constructor run');
                }


                componentDidMount() {           // third run (for apis)
                    fetch('https://dummyjson.com/products')
                        .then(res => res.json())
                        .then(data => console.log('Did Mount' + data.products));
                }


                componentDidUpdate() {          // No order for running only run after state or prop updates and after re-render
                    console.log('Did Update');
                }


                componentWillUnmount() {        // run after component removed from dom
                    console.log('Unmount Component');
                }

                render() {                      // second run (re-render when updates done for states or props)
                    return (
                        <div>
                            {this.state.counter}
                            <button onClick={() => this.setState(counter: this.state.counter + 1)}></button>
                        </div>
                    )
                }
            }

    * All this replaced with useEffect and useState Hooks in functional component *

    * Ex:
        import { useEffect, useState } from 'react';

        const HooksPage = () => {
            const [counter, setCounter] = useState(0);      // equal to constructor()
            const [products, setProducts] = useState([]);

            // this will make useEffect run every time we click on button and this is Balwa Kbeeeeeeeeeeera
            useEffect(() => {
                // can fetch api like componentDidMount
                console.log('from useEffect hook');
            })

            // so we use Dependency List Array in useEffect (Watcher)
            useEffect(() => {                               // equal to componentDidMount()
                // will run for first time component mount only
                console.log('from useEffect hook');
            }, [])

            // if we want code to run with every update on dependency list value
            useEffect(() => {                               // equal to componentDidUpdate()
                // will run with counter updates
                console.log('from useEffect hook');
            }, [counter])

            useEffect(() => {
                const controller = new AbortController();
                const signal = controller.signal;

                const fetchProducts = async () => {
                    try {
                        const response = await fetch('https://dummyjson.com/products', { signal });
                        const jsonData = await response.json();
                        setProducts(jsonData.products);

                        from 98 to 100 can be written like this
                        const response = await (await fetch('https://dummyjson.com/products', { signal }).json());
                        setProducts(response.products);
                    } catch(error) {
                        console.log(error) 
                    }   
                }

                fetchProducts();

                from 96 to 110 can be written in IIFE (Imediate Invoke Function Expression)
                * IIFE
                (async () => {
                    try {
                        const response = await fetch('https://dummyjson.com/products', { signal });
                        const jsonData = await response.json();
                        setProducts(jsonData.products);

                        // from 98 to 100 can be written like this
                        // const response = await (await fetch('https://dummyjson.com/products', { signal }).json());
                        // setProducts(response.products);
                    } catch(error) {
                        console.log(error) 
                    }  
                })()

                (لو حصل مثلا والمستخدم نقل من الصفحه اللي بتعمل ريكويست وهو كان بيندنج لسه بنحتاج ساعتها الكلين اب لان مش من المنطقي يكون الريكويست لسه شغال معاننا ف الباك جراوند)
                * Cleanup (Request Cancelation)
                return () => {
                    console.log('Component Unmount');       // equal to componentWillUnmount()
                    controller.abort();
                }
            }, [])

            console.log('render || re-render');             // equal to Render()

            return (
                <div>
                    <h3>{ counter }</h3>
                    <button onClick={() => setCounter(prev => prev + 1)}> + </button>

                    {
                        products.length ? products.map(product => <p>{ product.title }</p>) : (<h3>Loading ...</h3>)
                    }
                </div>
            )
        }
*/