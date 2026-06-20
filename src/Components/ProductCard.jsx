import { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
function ProductCard(){

    const [data,setdata]=useState(null);
    const [loading,setLoading]=useState(false)

   async function fetchData(){
    setLoading(true);
        try {
            const response= await fetch("https://dummyjson.com/products");
        const output=await response.json();
        setdata(output.products)
            
        } catch (error) {
            console.log("data not fetched");
            setLoading(false);
            setdata(null)
            
        }
        setLoading(false)

    }
    useEffect(()=>{
        fetchData();

    },[])
    console.log(data)
    return (
        <div className="flex flex-wrap mx-auto w-9/11 justify-center items-center">
          {
            loading?(<div className="flex items-center justify-center"><Spinner className="flex items-center justify-center my-auto"></Spinner></div>):(
                data?( 
             data.map((product)=>{
                return <Card key={product.id} product={product}></Card>
            })
           ):(
            <p>data not found</p>
           )
            )
          }

        </div>
    )
}

export default ProductCard;