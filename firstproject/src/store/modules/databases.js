import axios from 'axios'



const DummyData = {
    state: {
        DummyData:[]
    },
    
    getters: {
        DummyData:(state) =>state.DummyData
    },
    
    actions: {
        async fetchDummyData() {
            let data = await axios.get('http://localhost:3000/data')
        // .then(function(resp) {
        //     console.log(resp.data)
        //   commit('setDummyData',resp.data)
        // })
        // .catch(function(error) {
        //     console.log(error)
        // })
            return data.data
        }
        
    },
    
    mutations: {
        setDummyData:(state, DummyData) => (state.DummyData=DummyData)
    }
}

export default DummyData;