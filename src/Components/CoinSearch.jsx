import React from 'react';
import { useState } from 'react';
import CoinItem from './CoinItem';
import Spinner from "./Sppiner"

const CoinSearch = ({coins, loading}) => {
    const [searchText, setSearchText] = useState('')
    return (
        <>
            {loading ? <Spinner/> : (
                <div className="rounded-div my-4">
                    <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
                        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
                        <form>
                            <input 
                                onChange={(e) => setSearchText(e.target.value)} 
                                className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl outline-none"
                                type="text" 
                                placeholder="Search a coin" />
                        </form>
                    </div>
                    <table className="w-full border-collapse text-center">
                        <thead>
                            <tr className="border-b">
                                <th></th>
                                <th className="px-4">#</th>
                                <th className="text-left">Coin</th>
                                <th></th>
                                <th>Price</th>
                                <th>24h</th>
                                <th>24h Volume</th>
                                <th className="hidden md:table-cell">Mkt</th>
                                <th className="hidden sm:table-cell">Last 7 Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins
                                .filter((value) => (
                                    (searchText === "") ? value : value.name.toLowerCase().includes(searchText.toLowerCase())
                                ))
                                .map((coin) => (
                                    <CoinItem key={coin.market_cap_rank} coin={coin}/>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default CoinSearch