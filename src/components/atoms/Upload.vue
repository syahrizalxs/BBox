<template>
  <div class="upload-btn-wrapper">
    <button class="btn">
      <img :src="require('../../assets/icons/button/plus.svg')"><span> Upload Here</span>
    </button>
    <input
      type="file"
      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      name="myfile"
      @change="handleChange($event)"
    >
  </div>
</template>

<script>
export default {
	name: 'Upload',
	props: ['type'],
	methods: {
		handleChange(e) {
			this.$emit('change', e.target.files[0], this.type)
		},
	},
}
</script>

<style lang="scss" scoped>

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  height: 45px;
  width: 100%;
  cursor: pointer !important;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.btn {
  cursor: pointer !important;
  font-family: Helvetica;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #0077B5;

  width: 100%;
  height: 45px;
  background: #FFFFFF;
  border: 1px dashed #008FDB;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>
