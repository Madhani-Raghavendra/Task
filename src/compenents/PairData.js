import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

export default function PairData() {
    const [data, setData] = useState([])
    let [search, setSearch] = useState('')

    const url = `https://api.dexscreener.com/latest/dex/search?q=WBNB%20USDC`
    function Data() {
        axios.get(url).then(data => {
            console.log(data.data.pairs)
            setData(data.data.pairs)
        });
    }
    useEffect(() => {
        Data()
    }, [])
    const filteredData = data.filter(val => {
        return val.dexId.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <div className='m-3 p-3'>
            <input className="form-control ms-5 w-25" type="search" placeholder="Search dexid" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            {filteredData.length? filteredData.map((option) => (
                <div className='d-flex jusitify-content-between row '>
                    <div className="card  mb-3 col-sm-12 col-md-6 col-lg-4 m-3" style={{ maxWidth: "18rem" }}>
                        <div>Basic info</div>
                        <div className="card-body">
                            <div className="">pairCreatedAt={option.pairCreatedAt}</div>
                            <h5 className="card-title">symbol={option.baseToken.symbol}</h5>
                            <p className="card-text">dexId={option.dexId}</p>
                        </div>
                    </div>
                    <div className="card  mb-3 col-sm-12 col-md-6 col-lg-4 m-3" style={{ maxWidth: "18rem" }}>
                        <div>Base Token</div>
                        <div className="card-body">
                            <div className="">Name={option.baseToken.name}</div>
                            <h5 className="card-title">Symbol={option.baseToken.symbol}</h5>
                            <p className="card-text">Address={option.baseToken.address}</p>
                        </div>
                    </div>
                    <div className="card  mb-3 col-sm-12 col-md-6 col-lg-4 m-3" style={{ maxWidth: "18rem" }}>
                        <div>Quote Token</div>
                        <div className="card-body">
                            <div className="">Name={option.quoteToken.name}</div>
                            <h5 className="card-title">Symbol={option.quoteToken.symbol}</h5>
                            <p className="card-text">Address={option.quoteToken.address}</p>
                        </div>
                    </div>
                    <div className="card  mb-3 col-sm-12 col-md-6 col-lg-4 m-3" style={{ maxWidth: "18rem" }}>
                        <div>price</div>
                        <div className="card-body">
                            <div className="">priceNative={option.priceNative}</div>
                            <h5 className="card-title">priceUsd={option.priceUsd}</h5>
                        </div>
                    </div>
                </div>
            )):<h1 className='alt'>No Data found</h1>}

        </div>

    )
}
