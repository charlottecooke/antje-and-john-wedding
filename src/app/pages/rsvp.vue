<template>
    <main>

        <!-- I now think this may not be possible! It's going to be so heavy weight :/ -->
        <div class="layout">
            <h1 class="rsvp-title">RSVP</h1>
            <p>Please let us know by the 6th of June</p>
            <form class="rsvp-form">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" class="form-control" v-model="guestInfo.firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" class="form-control" v-model="guestInfo.lastName">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" class="form-control" v-model="guestInfo.email">
                </div>
                <div class="form-group">
                    <label>Can you attend?</label>
                    <label for="yes">
                        <input type="radio" id="yes" value="Yes" v-model="guestInfo.attending"> Yes
                    </label>
                    <label for="no">
                        <input type="radio" id="no" value="No" v-model="guestInfo.attending"> No
                    </label>
                </div>

                <!-- we could have dietary restrictions and also favourite song or similar -->
                <div class="form-group">
                    <label>Do you need a plus one?</label>
                    <label for="yes">
                        <input type="radio" id="yes" value="Yes" v-model="guestInfo.plusOnes"> Yes
                    </label>
                    <label for="no">
                        <input type="radio" id="no" value="No" v-model="guestInfo.plusOnes"> No
                    </label>
                </div>

                <div class="submit-div">
                    <button class="submit-button" @click.prevent="submitted">Submit!
                    </button>
                </div>
            </form>

            <hr>
            <div class="row" v-if="isSubmitted">
                <h4>Your Details:</h4>
                <div class="returned-details">
                    <p>Full Name: {{ guestInfo.firstName }} {{ guestInfo.lastName }}</p>
                    <p>Email: {{ guestInfo.email }}</p>
                    <p>Attending: {{ guestInfo.attending }}</p>
                    <p>Do you need a plus one?: {{ guestInfo.plusOnes }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    head() {
        return {
            title: 'RSVP'
        };
    },
    data() {
        return {
            guestInfo: {
                firstName: '',
                lastName: '',
                email: '',
                attending: true,
                plusOnes: false,
                numberOfPlusOnes: 0,
                plusOneNames: []
            },
            isSubmitted: false
        }
    },
    methods: {
        submitted() {
        this.isSubmitted = true;
        }
    }
};
</script>

<style lang="scss">

@font-face {
    font-family: caligraphy;
    src: url("../assets/fonts/hello_honey.otf") format("opentype");
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;

    .layout {
        display: contents;
    }

    input {
        margin-left: 20px
    }


  .rsvp-title {
        padding-top: 80px;
        font-family: caligraphy;
        font-size: 5em;
        align-self: center;
  }

  .form-group {
    display: flex;
    justify-content: flex-end;
    padding: 6px 0
  }

  .word-input {
      margin-left: 20px;
  }

  .radio-input {
      margin-left: 20px;
  }

  p {
      color: pink;
  }

  .submit-div {
    display: flex;
    justify-content: center;
  }

    .submit-button {
        border-radius: 12px;
        margin-top: 20px;
        font-family: skinny-font;
    }
}
</style>
