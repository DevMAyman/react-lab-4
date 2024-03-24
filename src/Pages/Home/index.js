import axios from "axios"
import { useEffect, useState } from "react"
import ResCard from "../../Components/ResCard"



export default function Home(){
    const [products,setProducts]=useState([])
    useEffect(
        ()=>{
            axios.get('https://dummyjson.com/products')
            .then(res => {setProducts(res.data.products);
            console.log(res.data.products)}
            )
            .catch(err=> console.log(err))
        },[]
    )
    return(
        <section className="container-fluid ps-5 pe-5">
            <div className="row">
        {products.map(
            (product)=>(<ResCard key={product.id} product={product}/>)
            )}
            </div>            
        </section>
    )
}