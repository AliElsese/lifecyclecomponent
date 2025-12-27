import { Component } from 'react'

export default class CounterPage extends Component {
    constructor() { // first time only
        super();

        console.log('Constructor Run Counter'); // 1
        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        console.log('Did Mount'); // 3
    }

    componentDidUpdate() {
        console.log('Did Update');
    }

    componentWillUnmount() {
        console.log('will unmount form counter');
    }

    render() {
        console.log('Render Run || Re-render Run') // 2 , 4

        return (
            <div className='flex justify-center items-center flex-wrap'>
                <h2 className='text-2xl text-red-500'>{this.state.counter}</h2>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })} className='px-2 py-2 text-white bg-black'>+</button>
            </div >
        )
    }
}