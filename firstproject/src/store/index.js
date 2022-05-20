import { createStore } from "vuex"

import DummyData from './modules/databases'

const store = createStore({
    modules:{
        DummyData
    }
})

export default store