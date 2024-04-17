export default new class RoleProvider{

  getRoles(axios: any){
    return axios.get('/api/management/roles/list/')
  }

} 