<template>
<!-- <link href="css/emelie.css" rel="stylesheet"> -->
<link href="js/emelie.js" type="application/javascript">
    <div class="flex bg-gray-100 border-b border-gray-300 py-4">
        <div class="container mx-auto flex justify-between">
            <div class="container mx-auto py-2">
            <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">Home Component</div>

                                <div class="card-body">
                                <div class="card-title"></div>
                                    I'm an home component.
                                </div>

                                <div v-for="user in allUsers" :key="user.id" :class="{'red-text':  user.userType == 'EcommerceAgent'}">
                                    {{user.name}}
                                    <a  style="padding-left: 1rem;" href="#" @click.prevent="update(user)" rel="noopener noreferrer" >
                                        update User
                                    </a>

                                    <a style="padding-left: 1rem;" href="#" @click.prevent="deleteUsers(user.id,user.name)" rel="noopener noreferrer" >
                                        delete User
                                    </a>




                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- <component :is="script" type="application/javascript" async src="js/emelie.js"></component> -->

</template>

<script>


    import {mapGetters, mapActions} from 'vuex'


    export default {

    // metainfo:{
    //     script:[

    //         // {src:'js/emelie.js'},
    //         {src:'js/emelie.js'},
    //         {src:'', async:true, defer:true},
    //     ],

    // },

        mounted() {
            console.log('Component mounted.')

        },
        methods: {
            ...mapActions(['fetchUsers', 'delUsers', 'updateUser']),

            deleteUsers(id,name2){

                if (confirm('Delete this User ?')) {


                    this.delUsers(id)
                    .then(()=>{
                        this.$toast.success(`${name2} Deleted Successfully`);


                    }).catch((err)=>{
                        this.$toast.error(
                            'Server Error',
                            {
                                position:"top-right",
                                duration: 5050,

                            }
                        )
                        console.log(err.response.data.errors);
                    });
                }
            },

            update(user){

                let newName = prompt('update user name ?');
                alert(newName);
                const updUser = {
                    id:user.id,
                    name:newName,
                    email:user.email,
                    password:user.password,
                    password_confirmation:user.password_confirmation,
                    phone:user.phone,
                    gender:user.gender,
                    userType:user.userType,

                }
                console.log(updUser);

                this.updateUser(updUser)
                .then((res)=>{
                    // this.$toast.success(`${name2} Deleted Successfully`);

                    console.log(res);
                    // console.log(res.data.data);
                    // console.log(res.response.data.errors);
                    console.log('res');
                })

            }


        },
        computed: mapGetters(['allUsers']),
        created() {
            this.fetchUsers()

        },


    }
</script>
<style scoped>
.red-text{
    color: red;
}

</style>
