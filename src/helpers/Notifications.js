import Vue from "vue";
class Notification {
    push(group, msg, title = "Important message", type = "success") {
        return Vue.notify({
            group: `${group}`,
            title: `${title}`,
            text: `${msg}`,
            type: `${type}`,
        });
    }
}
// eslint-disable-next-line no-class-assign
export default Notification = new Notification();