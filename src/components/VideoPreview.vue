<template>
    <div class="video-preview" v-on:click="registerVideo">
        <img :src="thumbnail" alt="video" />
        <span>{{ title }}</span>

        <div class="duration">
            <span>1:00</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id", "title", "thumbnail", "video"],

    methods: {
        registerVideo() {
            // register the video if the current id in video player store != id from props
            if (this.id !== this.$store.state.videoPlayer.id) {
                this.$store.dispatch("videoPlayer/register", { id: this.id, title: this.title, thumbnail: this.thumbnail, video: this.video });
            }

            this.$router.push("/" + this.id);
        }
    }
};
</script>

<style>
.video-preview {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
}

.video-preview img {
    width: 100%;
    height: 165px;
    object-fit: "cover";
}

.video-preview span {
    padding-top: 10px;
    font-size: 16px;
    font: bold;
}

.video-preview .duration {
    margin-left: auto;
    margin-top: -40px;
    margin-right: 16px;
}

.video-preview .duration span {
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    padding-right: 18px;
    padding-left: 18px;
    padding-bottom: 10px;
}
</style>
