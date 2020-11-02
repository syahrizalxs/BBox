<template>
  <div class="search-container">
    <div class="input-container">
      <input type="text" class="text" placeholder="Type here..">
      <img src="../../assets/icons/search.svg" aria-hidden="true">
    </div>
    <button class="button-search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'Search-Component'
}
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  width: 100%;
  .input-container {
    position: relative;
    padding: 0;
    width: 100%;
    input {
      width: 100%;
      height: 48px;
      outline: none;
      padding-left: 56px;

      border: none;
      border-radius: 5px;
      background: #F2F2F2;
      box-sizing: border-box;

      font-family: Helvetica;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height */

      letter-spacing: 0.01em;

      /* Gray 4 */
      color: #434343; 
    }

    img {
      position: absolute;
      left: 19px;
      right: 17px;
      top: 15px;
    }
  }
  .button-search {
    width: 92px;
    height: 48px;
    margin-left: 8px;

    background: #0077B5;
    border-radius: 5px;
    // transform: matrix(-1, 0, 0, 1, 0, 0);

    font-family: Helvetica;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.01em;

    color: #FFFFFF;
  }
}
</style>