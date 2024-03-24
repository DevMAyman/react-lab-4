import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner';






export default  function  ProductDetails(){
    const [product,setProduct]=useState('')
    const {id} = useParams();

    useEffect(
        ()=>{
            axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {setProduct(res.data);
            console.log(res.data)}
            )
            .catch(err=> console.log(err))
        },[product]
    )
    if(product){
        return(<div className="font-[sans-serif] bg-gray-700">
    <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="bg-gray-800 px-4 py-10 rounded-xl">
            <img src={product.images[0]} alt="Product" className=" rounded object-contain" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
            {
                product.images.map((image)=>(
                    <div className="bg-gray-800 rounded-xl p-4">
              <img src={image} alt="Product2" className="w-24 cursor-pointer" />
            </div>
                ))
            }
            
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-yellow-300">{product.title}| {product.category}</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-yellow-300 text-4xl font-bold">{ Math.floor(product.price*(1-product.discountPercentage*.01))} </p>
            <p className="text-gray-400 text-xl"><strike>{product.price}</strike> <span className="text-sm ml-1">Tax included</span></p>
          </div>
          <div className="flex space-x-2 mt-4">
            <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            {/* Repeat this SVG for each star */}
            <h4 className="text-white text-base">500 Reviews</h4>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <button type="button" className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-bold rounded">Buy now</button>
            <button type="button" className="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-bold rounded">Add to cart</button>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold text-yellow-300">{`About the ${product.title}`}</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
              <li>{product.description}</li>
              {/* Repeat for other list items */}
            </ul>
          </div>
          <div className="mt-8">
            {/* Reviews section */}
          </div>
        </div>
      </div>
    </div>
  </div>
    )
    }
    else{
        return(  
            <div className="container d-flex justify-content-center align-items-center w-100">
                <Hourglass
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                    className="p-0 m-0"
                    />
                </div>
        )
    }
    
}