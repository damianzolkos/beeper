Vue.component('app-header', {
  template: `
    <nav>
    <div class="nav-wrapper blue lighten-1">
      <a href="#" class="brand-logo center">beeper</a>
      </ul>
    </div>
  </nav>
  `
})

Vue.component('app-beepbox', {
  template: `
    <div id='beepBox' class="radius">
    <input id='beepInput'>
    <button id='beepButton'>beep!</button>
    </div>`
})

Vue.component('app-footer', {
  template: `
    <footer class="page-footer blue darken-1">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <p class="grey-text text-lighten-4">beeper is a very simple twitter clone, created using Vue.js and Materialize</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="http://github.com/damianzolkos">Github</a></li>
            <li><a class="grey-text text-lighten-3" href="http://damianzolkos.github.io">DŻ</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2020 beeper
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
    `
})

Vue.component('app-beep', {
  props: ['beep'],
  template: `
    <div class="row">
        <div class="col s12 m12">
          <div class="card blue-grey darken-1 z-depth-5">
            <div class="card-content white-text">
              <span class="card-title">{{ beep.userName }}</span>
              <p>{{ beep.message }}</p>
            </div>
            <div class="card-action">
              <a href="#">@{{ beep.user }}</a>
              <span class="material-icons" v-on:click="toogle()" v-bind:class="{ liked: beep.isLiked}">favorite</span>
              <span class="likesCounter">{{beep.likes}}</span>
              <span class="beepsTime">{{beep.timestamp}}</span>
            </div>
          </div>
        </div>
      </div>
    `
})

var app = new Vue({
  el: '#app',
  data: {
    beeps: [{
        id: 0,
        user: "johnapple",
        userName: "John Appleseed",
        timestamp: "20:17",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        likes: 1,
        isLiked: true
      },
      {
        id: 1,
        user: "mesopodamian",
        userName: "Damian Żółkoś",
        timestamp: "22:38",
        message: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem! 🤣🍞🐖",
        likes: 5,
        isLiked: false
      },
      {
        id: 2,
        user: "johnapple",
        userName: "John Appleseed",
        timestamp: "21:46",
        message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        likes: 1,
        isLiked: true
      },
      {
        id: 3,
        user: "marryberry",
        userName: "Marry Berryseed",
        timestamp: "22:37",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        likes: 12,
        isLiked: false
      }, {
        id: 4,
        user: "johnapple",
        userName: "John Appleseed",
        timestamp: "21:37",
        message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        likes: 4,
        isLiked: false
      }
    ]
  },
  methods: {
    toogle() {
      this.isLiked = !this.isLiked;
    }
  }
})