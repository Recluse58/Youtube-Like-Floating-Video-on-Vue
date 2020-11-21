<template>
    <div class="detail">
        <div class="wrapper">
            <h1>{{ title }}</h1>

            <video-player />
        </div>
    </div>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer";

export default {
    components: {
        VideoPlayer
    },

    data() {
        return {
            title: ""
        };
    },

    mounted() {
        // set the title from video player store
        this.title = this.$store.state.videoPlayer.title;

        // back to home when no video registered
        if (this.title === "") this.$router.push("/");
    }
};
</script>

<style>
.detail {
    width: 100%;
}

.detail .wrapper {
    display: flex;
    flex-wrap: wrap;
}

.detail .wrapper h1 {
    width: 100%;
}
</style>
