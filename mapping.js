// user
// (id,email,firstname,secondname,role,password)
//  pk
// -------------------------------------------------

// contact
// (id,phone)
//  pk of user,multivalued attribute
//  -------------------------------------------------
//  product
//  (id,name,stock,isdeleted,price,userID)
//   pk                            FK     
//   -------------------------------------------------

//   id in contact reference to id (PK) in user

//   userID in (product) reference to id in (user)