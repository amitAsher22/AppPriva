import { useEffect } from "react"
import { useParams } from "react-router-dom"
import React , {useState} from "react"
import AddOwners from "./AddOwners"

const UpdateOwner =()=>{
  const { id } = useParams()
  const [singleOwner , setSingleOwner] = useState({})
 
  useEffect(()=>{
   fetch(`http://localhost:8080/uniqueOwner/${id}`,{
    method: "GET"
  }) 
  .then(res => res.json())
  .then(data => setSingleOwner(data[0]))
  
  }, []);
  
  
  return(
    <>
      <AddOwners singleOwner={singleOwner}/>
    </>
  )
}




export default UpdateOwner