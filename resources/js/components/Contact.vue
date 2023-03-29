<template>
  <div class="flex bg-gray-100 border-b border-gray-300 py-4">
    <div class="container mx-auto flex justify-between">
      <div class="container mx-auto py-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header">Contact Component</div>

                <div class="card-body">
                  <div class="card-title"></div>
                  I'm an contact component working fine.
                </div>
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
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
