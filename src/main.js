import Vue from 'vue'
import App from './App.vue'
import moment from 'moment';

import { router } from './router/router';

/*fetch json data from json file*/
import userData from './json/users.json';
import invitations from './json/invitations.json';
import invitationsUpdate from './json/invitations_update.json';


Vue.config.productionTip = false;

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value*1000).format('MM/DD/YYYY hh:mm')
  }
});

Vue.mixin({
  data: function() {
    return {
      userData:userData.users,
      notifications:invitations.invites,
      notificationEvent:invitationsUpdate.invites,
    }
  }
});
new Vue({
	el : '#app',
	router,
	render: h => h(App),
});
