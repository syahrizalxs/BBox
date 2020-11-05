<template>
<div class="wrapper-timeline">
  <section class="_timeline-container" v-for="(item, index) in 2" :key="index">
    <div class="_timeline-activity-time">Today</div>
    <div class="_timeline-content" style="margin-top: 20px;" v-for="(item, index) in 3" :key="index">
      <div class="_timeline-content-left">
        <img class="_timeline-content-left-symbol" :src="index % 2 !== 0 ? require('../assets/icons/timeline/blue.svg') : require('../assets/icons/timeline/orange-circle.svg')" alt="" >
        <div class="_timeline-content-left-vertical-line">
          .
        </div>
      </div>
      <div class="_timeline-content-right">
        <div class="_timeline-content-right-user-activity">
          <span class="user-name">William Byers </span>
          <span class="activity">uploaded document </span>
          <span class="process-type">Minutes Of Meeting </span>
        </div>
        <div class="_timeline-content-right-document-activity">
          <span class="document-type">Sub Process</span>
          <span class="small-circle">&nbsp;</span>
          <span class="document-time">Sep 27, 2020 at 1:29 PM</span>
        </div>
        <div class="_timeline-content-right-document-section">
          <div class="_box-doc">
            <div>
              <img class="icon-file" :src="require('../assets/icons/word.svg')">
              <span class="nama-file">MoM_Brightspace_200927_ver01_WB.docx</span>
              </div>
          </div>
        </div>
      </div>
    </div>
</section>
</div>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style lang="scss" scoped>
._timeline-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ._timeline-activity-time {
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    margin-top: 20px;

    letter-spacing: 0.01em;

    color: #333333;
  }
  
  ._timeline-content {
    min-height: 100%;
    margin-left: 18px;
    display: flex;
    ._timeline-content-left {
      width: 22px;
      min-height: 80% !important;
      ._timeline-content-left-vertical-line {
        width: 1px;
        min-height: 85%;
        border-bottom: 1px;
        border: 1px solid #C4C4C4;
        margin: 0 auto;
      }
    }

    ._timeline-content-right {
      margin-left: 24px;
      height: 100%;
      width: 100%;
      ._timeline-content-right-user-activity {
        margin-bottom: 5px;
      }
    } 
  }

  .user-name {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;

    color: #333333;
    margin-right: 4px;
  }

  .activity {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.01em;

    /* Gray 3 */

    color: #828282;
    margin-right: 4px;
  } 
  .process-type {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.01em;

    /* Blue 2 */

    color: #2D9CDB;
  }

  .document-type {
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    /* identical to box height */

    letter-spacing: 0.01em;

    /* Orange */

    color: #F2994A;
    margin-right: 5px;
  }

  .small-circle {
    display: inline-block;
    min-height: 5px;
    background-color: #C4C4C4;
    border-radius: 50%;
    min-width: 5px;
    margin-right: 5px;
  }

  .document-time {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: 0.01em;

    /* Gray 3 */

    color: #828282;
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
}
</style>