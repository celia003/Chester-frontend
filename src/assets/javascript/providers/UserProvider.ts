export default new class UserProvider{

  getUsers(axios:any, queryParams:any){
    const params = {params: queryParams}
    return axios.get('/api/management/user/list/', params)
  }

  getUser(axios:any, id:string){
    return axios.get('/api/management/user/get/'+id)
  }

  updateUserStatus(axios:any, id:number, queryParams:any){
    const params = {params: queryParams}
    return axios.patch('/api/management/user/update/status/' + id, queryParams)
  }

  createUser(axios:any, queryParams:any){
    const params = {params: queryParams}
    return axios.post('/api/management/user/create/', queryParams)
  }

  updateUser(axios:any, id:number, queryParams:any){
    const params = {params: queryParams}
    return axios.patch('/api/management/user/update/'+id, queryParams)
  }
  
} 