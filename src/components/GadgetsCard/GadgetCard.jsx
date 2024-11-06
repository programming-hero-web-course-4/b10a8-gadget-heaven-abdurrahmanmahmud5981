import { useEffect } from "react"
import { useState } from "react"
import SingleCard from "./SingleCard"
import { useLoaderData,  useParams } from "react-router-dom"
import NotFound from "../NotFound/NotFound"


const GadgetCard = () => {
  const data = useLoaderData()
  
  const {category} = useParams()
  const cate = useParams()
    const [gadgets,setGadgets] = useState([])
   console.log(category);
   console.log(cate);
  // pathname
    // console.log(pathname);
    // Fetch data from API
    useEffect(()=>{
      if(category){
        const filteredData = [...data].filter(data=>`${data.category.toLowerCase()}`=== `${category}` )
        setGadgets(filteredData);
      }else{
        setGadgets([...data].slice(0,15))
      }
    },[category,data])

    // Display gadgets
    // console.log(gadgets);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
       {
       
       gadgets.length >0 ? gadgets.map((product) => (
        <SingleCard key={product.product_id} product={product} />
      )):<NotFound/>
    
    } 
    </div>
  )
}

export default GadgetCard