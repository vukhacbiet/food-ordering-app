<template>
    <div>
        <h1>DataTable in VUE JS</h1>
        <hr/>

        <div id="tableSection">

  
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DataTable",
    data() {
        return {

        }
    },
    created() {
        this.getData()
    },
    mounted() {
        this.getDataTable()
    },
    methods: {
        getDataTable(dynamicData) {
                document.getElementById('tableSection').innerHTML = ''
                document.getElementById('tableSection').innerHTML = '<table id="normalTable" class="table">'
                window.$('#normalTable').DataTable({
                    data:dynamicData,
                    columns:[
                        {
                            data:'firstName',
                            title: 'First Name'
                        },
                        {
                            data:'middleName',
                            title: 'Middle Name'
                        },
                        {
                            data:'lastName',
                            title: 'Last Name'
                        },
                        {
                            data:'username',
                            title: 'Username'
                        },
                        {
                            data:'email',
                            title: 'Email'
                        },
                        {
                            data:'contact',
                            title: 'Contact'
                        },
                        {
                            data:'gender',
                            title: 'Gender'
                        },
                    ]
                })
        },

        getData(){
            var _this = this
                axios.get('http://localhost:3000/data')
                .then(function(response) {
                    console.log(response.data)
                    _this.getDataTable(response.data)
                })
                .catch(function(error) {
                    console.log(error)
                })

        }
    }
};
</script>

<style>

</style>