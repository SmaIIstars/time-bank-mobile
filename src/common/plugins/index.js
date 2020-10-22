import Vue from "vue";

// less
import less from "less";
Vue.use(less);

// font-awesome
import "font-awesome/css/font-awesome.min.css";

// mock
import "assets/mock";

// element ui
import {
  Divider,
  Button,
  Avatar,
  Form,
  FormItem,
  Input,
  Card,
} from "element-ui";

Vue.use(Divider);
Vue.use(Button);
Vue.use(Avatar);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Card);
