<template>

  <div class="flex bg-gray-100 border-b border-gray-300 py-4">
    <div class="container mx-auto flex justify-between">
      <div class="container mx-auto py-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header">About page</div>

                <div class="card-body">
                  {{ title }} {{test}}
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
  setup: () => ({
    title: "About page component",
    test:'lets see'
  }),
};
</script>
