<template>
    <div class="video-player">
        <video :src="video" :poster="thumbnail" ref="video" controls v-on:playing="onPlay" v-on:pause="onPause" v-on:timeupdate="onTimeUpdate" v-bind:autoplay="isAutoPlay" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            video: "",
            thumbnail: "",
            currentTime: 0,
            isAutoPlay: false,
            realTimeToContinue: 0
        };
    },

    created() {
        // this one cannot be checked on mounted
        this.realTimeToContinue = this.$store.state.videoPlayer.timeToContinue;
    },

    mounted() {
        this.id = this.$store.state.videoPlayer.id;
        this.video = this.$store.state.videoPlayer.video;
        this.thumbnail = this.$store.state.videoPlayer.thumbnail;

        // the video will get the continue time from video player store
        // the video also will play if is playing state is true in video player store
        if (this.realTimeToContinue > 0) {
            this.$refs.video.currentTime = this.$store.state.videoPlayer.timeToContinue;
            this.isAutoPlay = this.$store.state.videoPlayer.isPlaying;
        }
    },

    destroyed() {
        // when the component destroyed it will store the current time of the playing video
        // to video player store
        // this will be the "key" to continue or not the video in another components
        this.$store.dispatch("videoPlayer/setTimeToContinue", { timeToContinue: this.currentTime });
    },

    methods: {
        // some needed methods
        onPlay() {
            this.$store.dispatch("videoPlayer/play");
        },

        onPause() {
            this.$store.dispatch("videoPlayer/pause");
        },

        onTimeUpdate(e) {
            this.currentTime = e.target.currentTime;
        }
    }
};
</script>

<style>
.video-player {
    width: 100%;
    height: auto;
}

.video-player video {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
