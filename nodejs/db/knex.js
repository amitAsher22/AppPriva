const db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : '5432',
      user : 'postgres',
      password : '0523157737',
      database : 'priva'
    }
  });


  const updateOwnerId = ( data)=>{
     return db('privaowners')
     .where({ owner_id: data.id })
  .update( {"name_of_business_owner":data.firstName ,"lastname_of_business_owner":data.lastName , "address": data.address ,"activity_time":data.startTime ,"activity_time_end":data.EndTime, "phone":data.phone , "business_opening_sentence":data.text,"address_home_page": data.website  ,"category_of_business_owner":data.category})
  
  }




const deleteOwner = (id)=>{
  return db('privaowners')
  .where('privaowners.owner_id' , id)
  .del()
}



const getIdOwner = (id)=>{
  return db('privaowners')
  .select("*")
  .from("privaowners")
  .where('owner_id' ,id )
}


  const getOwners = ()=>{
     return db('privaowners')
       .select('*')
       .from('privaowners')   
  }


 const setOwners = ({FirstName,LastName,address,Starttime,Endtime,number,sentence,url,select})=>{
    return db("privaowners")
    .insert([{name_of_business_owner:FirstName ,lastname_of_business_owner:LastName , address: address ,activity_time:Starttime ,activity_time_end:Endtime, phone:number , business_opening_sentence:sentence,address_home_page: url  ,category_of_business_owner:select}])
    .returning("*")
  }

 module.exports = {
   getOwners,
   setOwners,
   getIdOwner,
   deleteOwner,
   updateOwnerId
  }
 

 

