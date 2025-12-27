import { useState } from "react";
import CounterPage from "./pages/CounterPage";
import ProductsPage from "./pages/ProductsPage";
import CounterPage2 from "./pages/CounterPage2";

export default function App() {
    const [page, setPage] = useState('counter')

    return (
        <>
            <ul className='flex items-center justify-center w-full bg-indigo-900 list-none text-white text-2xl gap-4'>
                <li className='cursor-pointer hover:text-red-400 hover:underline' onClick={() => { setPage('counter') }}>Counter Page</li>
                <li className='cursor-pointer hover:text-red-400 hover:underline' onClick={() => { setPage('products') }}>Products Page</li>
                <li className='cursor-pointer hover:text-red-400 hover:underline' onClick={() => { setPage('useeffect') }}>UseEffect Page</li>
            </ul>

            <div className="pt-5 bg-indigo-200 w-full h-dvh">
                {page === 'counter' ? <CounterPage /> : null}
                {page === 'products' ? <ProductsPage /> : null}
                {page === 'useeffect' ? <CounterPage2 /> : null}
                {/* <CounterPage2 /> */}
            </div>
        </>
    )
}
