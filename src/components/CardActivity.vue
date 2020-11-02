<template>
  <div class="_card">
    <div class="_head">
      <!-- <Avatar class="avatar" style="width:32px; heigh:32px" :path="'https://freedesignfile.com/upload/2017/06/HD-picture-Female-face-photo.jpg'" /> -->
      <img class="avatar" src="https://freedesignfile.com/upload/2017/06/HD-picture-Female-face-photo.jpg">
      <div>
        <span class="activity"><span class="name">Jane Doe </span><span class="doing">uploaded document in </span><span class="partner">Partnership dengan Brightspace</span></span>
        <span class="date">Sep 27, 2020 at 1:29PM</span>
      </div>
      <img class="more" src="../assets/icons/more.svg">
    </div>
    <div class="_main-card">
      <span class="tittle">Minutes of Meeting dengan Brightspace</span>
      <span class="desc">Pembahasan dengan Brightspace terkait partnership agreement yang akan direview oleh pihak ICON+.</span>
    </div>
    <div class="_box-doc">
      <div>
        <img class="icon-file" src="../assets/icons/word.svg">
        <span class="nama-file">MoM_Brightspace_200927_ver01_WB.docx</span>
        <img class="more" src="../assets/icons/more.svg">
      </div>
    </div>
    <div class="_keterangan">
      <div class="category">
        <span>Category</span>
        <p>Subprocess</p>
      </div>
      <div class="expired">
        <span>Documets Expired</span>
        <p>Sep 27, 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardActivity'
}
</script>

<style lang="scss" scopeds>
._card {
  width: 100%;
  height: 256px;
  padding: 16px 24px 0px 24px;

  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 5px;

  ._head {
    display: flex;
    flex-direction: row;

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 31px;
      background-size: cover;
      margin-right: 8px;
    }

    div {
      display: flex;
      flex-direction: column;
      // margin-right: 8px;

      .activity {
        .name {
          font-family: Helvetica;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.01em;
          color: #333333;
        }
        .doing {
          font-family: Helvetica;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.01em;
          color: #828282;
        }
        .partner {
          font-family: Helvetica;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.01em;
          color: #0077B5;
        }
      }

      .date {
        font-family: Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;
        letter-spacing: 0.01em;
        color: #828282;
      }
    }
    
    .more {
      margin-left: auto;
    }
  }

  ._main-card {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    
    .tittle {
      font-family: Helvetica;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.01em;
      color: #333333;
      margin-bottom: 4px;
    }

    .desc {
      font-family: Helvetica;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.01em;
      color: #333333;
    }
  }

  ._box-doc {
    width: 100%;
    height: 48px;
    margin-top: 16px;

    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    div {
      display: flex;
      flex-direction: row;
      margin-left: 16px;
      margin-top: 12px;

      .icon-file {
        margin-right: 8px;
      }

      .nama-file {
        font-family: Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #333333;
        margin-top: 4px;
      }

      .more {
        margin-left: auto;
        margin-right: 22px;
      }
    }
  }

  ._keterangan {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    .category {
      display: flex;
      flex-direction: column;

      span {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #333333;
      }
      p {
        margin-top: 5px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #333333;
      }
    }

    .expired {
      display: flex;
      flex-direction: column;

      span {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        letter-spacing: 0.01em;
        color: #333333;
      }
      p {
        margin-top: 5px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        letter-spacing: 0.01em;
        color: #333333;
      }
    }
  }
}
</style>