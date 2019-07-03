const baseURL = 'http://localhost:3000/api/customers/'


export default {

  getAllCustomers() {
    return fetch(baseURL)
    .then(res => res.json())
  }
  // postSighting(payload){
  //   return fetch(baseURL, {
  //     method: 'POST',
  //     body: JSON.stringify(payload),
  //     headers: { 'Content-Type': 'application/json'}
  //   })
  //   .then(res => res.json())
  // },
  // deleteSighting(id){
  //   return fetch(baseURL + id, {
  //     method: 'DELETE'
  //   })
  }
