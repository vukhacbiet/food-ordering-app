<template>
    <div>
        <h1>List Rendering</h1>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Marks</th>
            </thead>
            <tbody>
                <tr v-for="data in listData" :key="data.id">
                    <td>{{data.id}}</td>
                    <td>{{data.name}}</td>
                    <td>{{data.marks}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ListRendering",
    data() {
        return {
            listData:[
                {
                    id:1,
                    name:"OBJ1",
                    marks: "50",
                },
                {
                    id:4,
                    name:"OBJ2",
                    marks: "60",
                },
                {
                    id:5,
                    name:"OBJ3",
                    marks: "90",
                },
                {
                    id:6,
                    name:"OBJ4",
                    marks: "100",
                }
            ]
        }
    }
}
    </script>
<style></style>