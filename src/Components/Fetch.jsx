import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Fetch() {
    const [data, setData] = useState([])
  

    useEffect(() => {
        const datafetched = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products')
                let jsonData = await response.json()
                console.log(jsonData)
                setData(jsonData)
            } catch (err) {
                console.log(err)
            }
        }
        datafetched()
    }, [])

    const addToBag = (item) => {
        let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
        bagItems.push(item);
        localStorage.setItem('bagItems', JSON.stringify(bagItems));

       
    }

    // const addToBag =()=>{
    //     setTasks([...tasks,{data}])
    //     setData("")
    // }

    return (
        <>
            {data.map((el) => {
                return <div key={el.id} style={{ width: '600px', marginLeft: '35%' }}>
                    <br />
                    <img style={{ width: '300px', height: '300px', marginLeft: '40px',border:'5px solid orange',borderRadius:'5px',padding:'10px' }} src={el.image} alt={el.title} />
                    <br />
                    <h5>
                        <span style={{ fontSize: '20px', color: 'green' }}>Title : {el.title}</span>  <br />
                      <span style={{color:'grey'}}> Description : {el.description} </span> <br />
                      <span style={{color:'aqua'}}> Category : {el.category}</span>  <br />
                        <span style={{ color: 'red', fontSize: '20px' }}>  Rs {el.price} </span><br />
                    </h5>
                    <p> <span style={{color:'white'}}> Rate : {el.rating.rate} <br />
                        Count : {el.rating.count}</span>  <br />
                    </p>

                    <Link to = '/Bag'>
                    <button 
                        style={{ backgroundColor: 'orange', color: 'white', border: 'none', fontSize: '20px', padding: '5px' }}
                        onClick={() => addToBag(el)}
                    >
                        Add To Bag
                    </button>
                    </Link>
                  
                </div>
            })}
        </>
    )
}

export default Fetch
