import Vue from "vue";
import Vuex from "vuex";
import videoPlayer from "./modules/video-player";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        videoPlayer: videoPlayer
    }
});
