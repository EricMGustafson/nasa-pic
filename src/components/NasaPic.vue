<template>
    <div class="row mt-3">
      <div class="col d-flex justify-content-center shadow">
         <img class="rounded" :src="picture.hdurl" :title="picture.title" alt="">
      </div>
      <div class="col-4 p-2 d-flex flex-column justify-content-between shadow">
        <form class="mb-3 d-flex">
          <label for="date" class="form-label"></label>
          <input type="date" class="form-control" name="date" id="date">
          <button type="submit" class="btn btn-info">Search!</button>
        </form>
        <div>
          <p class="bg-info p-4 rounded">{{ picture.explanation }}</p>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  props: {
    picture: { type: Object, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 500px;
  width: auto;
  object-fit: cover;
}
</style>