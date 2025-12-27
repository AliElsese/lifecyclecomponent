import { useEffect, useState } from "react"

export default function CounterPage2() {
    const [counter, setCounter] = useState(0); // equal constructor
    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        console.log('use effect hook') // didMount, didUpdate
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            console.log(data)
            setProducts(data)
        })

        // cleanup - willUnmount
        return () => {
            console.log('will unmount form useeffect')

        }

    }, [])

    console.log('render')

    return (
        <div className='flex justify-center items-center flex-wrap'>
            <h2 className='text-2xl text-red-500'>{counter}</h2>
            <button onClick={() => { setCounter(counter + 1) }} className='px-2 py-2 text-white bg-black'>+</button>
        </div >
    )
}