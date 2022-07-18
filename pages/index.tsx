import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={'bg-slate-400 py-20 px-10 grid gap-5'}>
            <div className={'bg-white p-10 rounded-2xl shadow-xl'}>
                <span className={'font-bold text-3xl'}>Select Item</span>
                <div className={'flex justify-between'}>
                    <span className={'text-gray-500 mb-2'}>Greay Chair</span>
                    <span className={'text-gray-500'}>$19</span>
                </div>
                <div className={'flex justify-between'}>
                    <span className={'text-gray-500'}>Greay Chair</span>
                    <span className={'text-gray-500'}>$19</span>
                </div>
                <div className={'flex justify-between mt-2 pt-2 border-t-2 border-dashed'}>
                    <span>Total</span>
                    <span>$10</span>
                </div>
                <div className={'mt-5 bg-blue-500 text-white p-3 text-center rounded-2xl w-2/5 mx-auto'}>Checkout</div>
            </div>
            <div className={'bg-white p-10 rounded-2xl shadow-xl'}></div>
            <div className={'bg-white p-10 rounded-2xl shadow-xl'}></div>
            <div className={'bg-white p-10 rounded-2xl shadow-xl'}></div>
        </div>
    )
}

export default Home
