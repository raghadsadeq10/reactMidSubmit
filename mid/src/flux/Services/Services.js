
const Swapi = {
    async getpeople(){
    const sw = await fetch ("/https://swapi.dev/api/people")
    return sw.json();
        
    }
    


}

export default Swapi;