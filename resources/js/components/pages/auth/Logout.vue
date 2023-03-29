<script>
export default {
    created() {
        axios.post('/api/logout')
            .then(()=>{
               this.$router.push({name: "Home"})

            }).catch((err)=>{
                // this.errors = err.response.data.errors;
               console.log(err);
            })
    },
}
</script>
