<template>

    <div class="vh-100">
        <div class="authincation">
            <div class="container">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-md-7">
                        <div class="form-input-content text-center error-page">
                            <h1 class="error-text fw-bold">404</h1>
                            <h4><i class="fa fa-exclamation-triangle text-warning"></i> The page you were looking for is not found!</h4>
                            <p>You may have mistyped the address or the page may have moved.</p>
                            <div>
                                <router-link to="/"  class="btn btn-primary"> Back to Home</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

