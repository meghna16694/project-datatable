import React, { useEffect, useState } from 'react';

function Bag() {
    const [bagItems, setBagItems] = useState([]);
    const [searchQuery,setSearchQuery] =useState('')
    

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('bagItems')) || [];
        setBagItems(items);
    }, []);

    const handleDelete =(index)=>{
         const newBagItems = bagItems.filter((el , i)=> i !== index);
         setBagItems(newBagItems);
         localStorage.setItem("bagItems",JSON.stringify(newBagItems))
    }

    const sortAsc = ()=>{
        let x = [...bagItems].sort((a,b)=> a.price-b.price)
        setBagItems(x)
    }

    const sortDsc = ()=>{
        let x = [...bagItems].sort((a,b)=> b.price-a.price)
        setBagItems(x)
    }

    return (
        <div>
            <h2>Items in Bag</h2>
            {bagItems.filter((el)=>{
                return el.title.toLowerCase().includes(searchQuery.toLowerCase())
            })
            .map((item, index) => (
                <div key={index} style={{ width: '600px', marginLeft: '35%' }}>
                    <br />
                    <img  style={{ width: '300px', height: '300px', marginLeft: '40px',border:'5px solid orange',borderRadius:'5px',padding:'10px' }}  src={item.image} alt={item.title} />
                    <br />
                    <h5>
                        <span style={{ fontSize: '20px', color: 'green' }}>Title : {item.title}</span>  <br />
                      <span style={{color:'grey'}}>  Description : {item.description}</span> <br />
                     <span style={{color:'aqua'}}>  Category : {item.category}</span>  <br />
                        <span style={{ color: 'red', fontSize: '20px' }}>  Rs {item.price} </span><br />
                    </h5>
            
                    <p> <span style={{color:'white'}}> Rate : {item.rating.rate} <br />
                        Count : {item.rating.count}</span>  <br />
                    </p>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={sortAsc}>Ascending Order</button>
                    <button onClick={sortDsc}>Descending Order</button>
                    <input type='text'placeholder='Search Items' value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value) }></input>
                 
                </div>
            ))}
        </div>
    );
}

export default Bag;
