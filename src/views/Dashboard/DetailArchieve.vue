<template>
  <div class="archieve">
    <div class="_left">
      <div class="_left-heading">
        <Heading style="margin-right: 200px" />
      </div>
      <div class="_tittle">
        <span>Partnership dengan Brightspace</span>
      </div>
      <div class="_button">
        <div class="_btn-left">
          <button><img src="../../assets/icons/sort.svg"></button>
        </div>
        <div class="_btn-right">
          <Button title="Set Status" style="width: 132px; height: 39px;" type="purple">
            <template slot="icon">
              <img src="../../assets/icons/button/edit.svg">
            </template>
          </Button>
          <Button title="Timeline View" style="margin-left: 16px; width: 132px; height: 39px;" type="green">
            <template slot="icon">
              <img src="../../assets/icons/eye-white.svg">
            </template>
          </Button>
          <Button title="Add Process" @click="$refs.addProcess.visible = true" style="margin-left: 16px; width: 132px; height: 39px;" type="primary">
            <template slot="icon">
              <img src="../../assets/icons/button/plus-white.svg">
            </template>
          </Button>
        </div>
      </div>
      <div style="overflow-y:auto; margin-top:16px">
        <table class="styled-table">
          <thead>
            <tr>
              <th style="text-align:left">Process Name</th>
              <th style="text-align:left">Type</th>
              <th style="text-align:left">Last Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Minutes of Meeting dengan Brightspace</td>
              <td><span class="label-table">Sub Process</span></td>
              <td>Sep 27, 2020 at 1:29 PM</td>
              <td><img src="../../assets/icons/more.svg"></td>
            </tr>
            <tr class="active-row">
              <td>Minutes of Meeting dengan Brightspace</td>
              <td><span class="label-table">Sub Process</span></td>
              <td>Sep 27, 2020 at 1:29 PM</td>
              <td><img src="../../assets/icons/more.svg"></td>
            </tr>
            <tr>
              <td>Minutes of Meeting dengan Brightspace</td>
              <td><span class="label-table">Sub Process</span></td>
              <td>Sep 27, 2020 at 1:29 PM</td>
              <td><img src="../../assets/icons/more.svg"></td>
            </tr>
            <tr>
              <td>Minutes of Meeting dengan Brightspace</td>
              <td><span class="label-table">Sub Process</span></td>
              <td>Sep 27, 2020 at 1:29 PM</td>
              <td><img src="../../assets/icons/more.svg"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="_right">
      <div class="_notification-slot">
        <Notification />
      </div>
      <div class="_detail-event">
        <h2 style="margin-bottom: 40px;">Detail Event</h2>

        <span class="parent">Event Title</span>
        <span class="child">Partnership Dengan Brightspace</span>
        
        <span class="parent">Created</span>
        <span class="child">Jan 01, 2020 at 8:00 AM</span>
        
        <span class="parent">Last Update</span>
        <span class="child">Sep 27, 2020 at 1:29 PM</span>
        
        <span class="parent">Status</span>
        <span class="child">Cleared</span>
      </div>
      <div class="_participans">
        <b>Participants</b>
        <div class="_participants-ava">
          <Avatar class="_ava" path="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg/230px-Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg"/>
          <Avatar class="_ava" path="https://1.bp.blogspot.com/-7osU1A9QpAE/Tcf0jD5KoDI/AAAAAAAAAIs/AFEsHouE14w/s1600/travis-barker-profile.png"/>
          <Avatar class="_ava" path="https://media.suara.com/pictures/970x544/2019/08/18/23065-niki-zefanya.jpg"/>
          <Avatar class="_ava" path="https://p01.lacasting.com.castingnetworks.io/photos/mm/4/0/e0e9cde28b3542dfab980f9ed9046d04.jpg "/>
          <div class="_over-ava">
            <span class="_ava-number">+3</span>
          </div>
        </div>
      </div>
    </div>

    <Modal :title="'Add Process'" ref="addProcess">
      <template slot="body">
        <label class="custom-label" for="process">Process Name</label><br>
        <input class="custom-input" type="text" id="process" name="process"><br>
        <label class="custom-label" for="tipe">Type</label><br>
        <div style="margin-bottom:15px">
          <input type="radio" id="main" name="tipe" value="main process" style="margin-right:14px">
          <label class="custom-label-radio" for="main" style="margin-right:30px">Main Process</label>
          <input type="radio" id="sub" name="tipe" value="sub process" style="margin-right:14px">
          <label class="custom-label-radio" for="sub">Sub Process</label>
        </div>
        <label class="custom-label" for="description">Description</label><br>
        <textarea rows="100" class="custom-input" type="text-area" id="description" name="description"></textarea><br>
        <label class="custom-label" for="attachment">Attachment</label><br>
        <div class="upload-btn-wrapper">
          <button class="btn"><img src="../../assets/icons/button/plus-circle.svg"><span> Upload Here</span></button>
          <input type="file" name="myfile" />
        </div>
      </template>

      <template slot="footer">
        <Button title="Save" type="primary" style="padding: 15px 25px;"></Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Heading from '../../components/Heading'
import Modal from '../../components/Modal'
import Notification from '../../components/Notification'

// Atoms Components
import Button from '../../components/atoms/Button'
// import CardEvent from '../../components/CardEvent'
import Avatar from '../../components/atoms/Avatar'

export default {
  name: 'Archieve',
  components: {
    Heading,
    // Search,
    Button,
    // CardEvent,
    Modal,
    Notification,
    Avatar
  },
  data: () => ({
    
  }),
  computed: {
    starred () {
      return this.eventList.filter(item => item.starred)
    },
    notStarred () {
      return this.eventList.filter(item => !item.starred)
    }
  }

}
</script>

<style lang="scss" scoped>
.label-table {
  // position: absolute;
  width: 120px;
  height: 35px;
  // left: 454px;
  // top: 306px;

  background: rgba(181, 65, 0, 0.2);
  border: 1px solid #B54100;
  box-sizing: border-box;
  border-radius: 20px;
}
.styled-table {
    border-collapse: collapse;
    border: 1px solid #C1C1C1;
    box-sizing: border-box;
    border-radius: 5px;
    // margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    width: 100%;
    // padding: 18px 32px 18px 32px;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #ffffff;
    // color: #ffffff;
    // text-align: left;
    border-bottom: 1px solid #838383;
    height: 67px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #333333;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #E2E2E2;
    height: 99px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #333333;
}

.styled-table tbody tr:nth-of-type(even) {
    // background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    // border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
    // font-weight: bold;
    // color: #009879;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15);
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
  height: 45px;
  width: 100%;
}

.btn {
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

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.archieve {
  display: flex;
  width: 100vw;
  height: 100vh;
  ._left {
    display: flex;
    flex-direction: column;
    padding: 27px 32px;
    width: 66%;
    
    ._left-heading {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }

    ._tittle {
      display: flex;
      margin-top: 37px;

      span {
        font-family: Helvetica;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        letter-spacing: 0.01em;
        color: #333333;
      }
    }

    ._button {
      margin-top: 24px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      ._btn-left {
        button {
          align-items: center;
          width: 39px;
          height: 39px;
          display: flex;
          justify-content: center;
          background: #FFFFFF;
          border: 1px solid #C1C1C1;
          box-sizing: border-box;
          border-radius: 5px;
          transform: matrix(-1, 0, 0, 1, 0, 0);
        }
      }

      ._btn-right {
        display: flex;
        flex-direction: row;
      }
    }
  }
  ._right {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #F5F5F5;
    ._notification-slot {
      width: 100%;
      padding-right: 20px;
    }
    ._detail-event {
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      .parent {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #4F4F4F;
      }
      .child {
        margin-top: 4px;
        margin-bottom: 24px;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.01em;
        color: #333333;
      }
    }

    ._participans {
      height: 100%;
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      ._participants-ava {
        display: flex;
        ._ava {
          margin: 10px 10px 0 0;
        }
        ._over-ava {
          margin: 10px 10px 0 0;
          width: 37px;
          height: 37px;
          display: flex;
          justify-content: center;
          background: rgba(0, 168, 255, 0.1);
          border: 2px solid #0077B5;
          box-sizing: border-box;
          border-radius: 31px;
          ._ava-number {
            display: flex;
            align-self: center;
            font-weight: bold;
            text-align: center;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 0.01em;
            color: #0077B5;
          }
        }
      }
    }
  }
}
</style>