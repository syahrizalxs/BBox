<template>
  <div class="archieve">
    <div class="_left">
      <div class="_left-heading">
        <Heading />
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
          <CardEvent :starred="true" title="Partnership dengan SpaceX" status="cleared" />
        </div>
      </div>
      <div class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Cards</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in eventList" :key="index" style="margin-top: 10px;">
            <CardEvent :starred="false" :title="item.title" :status="item.status" />
          </div>
        </div>
      </div>
    </div>
    <div class="_right">
      
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

// Atoms Components
import Button from '../../components/atoms/Button'
import CardEvent from '../../components/CardEvent'

export default {
  name: 'Archieve',
  components: {
    Heading,
    Search,
    Button,
    CardEvent,
    Modal
  },
  data: () => ({
    eventList: [
      { status: 'cleared', title: 'Partnership dengan SpaceX', starred: true },
      { status: 'on progress', title: 'Partnership dengan Tesla', starred: true },
      { status: 'cleared', title: 'Partnership dengan Icon', starred: false },
      { status: 'canceled', title: 'Partnership dengan Facebook', starred: false }
    ]
  })

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
    width: 70%;
    
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
    background-color: #F5F5F5;
  }
}
</style>