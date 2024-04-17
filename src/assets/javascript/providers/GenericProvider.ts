export default new class UserProvider{

  async keepConnection(axios:any, ){
    return await axios.get('/api/management/keep/')
  }

}