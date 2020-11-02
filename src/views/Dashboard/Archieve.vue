<template>
  <div class="archieve">
    <div class="_left">
      <div class="_left-heading">
        <Heading style="margin-right: 200px" />
        <Search />
      </div>
      <div class="_left-starred">
        <div class="_left-heading-starred">
          <span>Starred Event</span>
          <Button title="Add Event" @click="$refs.addEvent.visible = true" style="width: 115px; height: 39px;" :type="'outline-primary'">
            <template slot="icon">
              <img src="../../assets/icons/button/plus.svg">
            </template>
          </Button>
        </div>
        <div class="_left-heading-starred-card">
          <div v-for="(item, index) in starred" :key="index">
            <CardEvent :starred="item.starred" style="margin-bottom: 10px;" :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span>Detail</span>
                <span @click="item.starred = false">Unstar this event</span>
              </template>
            </CardEvent>
          </div>
          <span style="opacity: 0.5;" v-if="starred.length === 0">
            There is no starred event.
          </span>
        </div>
      </div>
      <div class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Cards</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in notStarred" :key="index" style="margin-top: 10px;">
            <CardEvent :starred="false" :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span>Detail</span>
                <span @click="item.starred = true">Star this event</span>
              </template>
            </CardEvent>
          </div>
        </div>
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

    <Modal :title="'Add Event'" ref="addEvent">
      <template slot="body">
        <label class="custom-label" for="title">Event Title</label><br>
        <input class="custom-input" type="text" id="title" name="title"><br>
        <label class="custom-label" for="participants">Participants</label><br>
        <input class="custom-input" type="text" id="participants" name="participants"><br>
        <label class="custom-label" for="description">Description</label><br>
        <textarea rows="100" class="custom-input" type="text-area" id="description" name="description"></textarea><br>
      </template>

      <template slot="footer">
        <Button title="Save" type="primary" style="padding: 15px 25px;"></Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Heading from '../../components/Heading'
import Search from '../../components/atoms/Search'
import Modal from '../../components/Modal'
import Notification from '../../components/Notification'

// Atoms Components
import Button from '../../components/atoms/Button'
import CardEvent from '../../components/CardEvent'
import Avatar from '../../components/atoms/Avatar'

export default {
  name: 'Archieve',
  components: {
    Heading,
    Search,
    Button,
    CardEvent,
    Modal,
    Notification,
    Avatar
  },
  data: () => ({
    eventList: [
      { status: 'cleared', title: 'Partnership dengan SpaceX', starred: true },
      { status: 'on progress', title: 'Partnership dengan Tesla', starred: true },
      { status: 'cleared', title: 'Partnership dengan Icon', starred: false },
      { status: 'canceled', title: 'Partnership dengan Facebook', starred: false }
    ]
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

    ._left-starred {
      margin-top: 52px;
      display: flex;
      flex-direction: column;
      ._left-heading-starred {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        span {
          font-weight: bold;
          font-size: 24px;
          line-height: 33px;
          /* identical to box height */

          letter-spacing: 0.01em;

          color: #333333;
        }
      }

      ._left-heading-starred-card {
        padding-top: 24px;
      }
    }

    ._left-event-cards {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      width: 100%;

      ._left-event-cards-heading {
        margin-bottom: 10px;
        span {
          font-weight: bold;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: 0.01em;

          color: #333333;
        }
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
    }
    ._detail-event {
      margin-top: 70px;
      display: flex;
      flex-direction: column;
      .parent {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height */

        letter-spacing: 0.01em;

        /* Gray 2 */

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