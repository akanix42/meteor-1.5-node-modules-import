// Libs
import { Meteor } from 'meteor/meteor';
import Vue from 'vue';

// Main app
import App from '/imports/client/ui/App.vue';

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('app');
});
