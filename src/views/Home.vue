<template>
    <div class="home">
        <div class="wrapper">
            <h1>Videos</h1>

            <div class="item" v-for="video in videos" :key="video.id">
                <video-preview :id="video.id" :title="video.title" :thumbnail="video.thumbnail" :video="video.video" />
            </div>
        </div>

        <video-player class="video-player" v-if="isContinuesVideoPlayerShown" />
    </div>
</template>

<script>
import VideoPlayer from "../components/VideoPlayer.vue";
import VideoPreview from "../components/VideoPreview.vue";

export default {
    components: {
        VideoPreview,
        VideoPlayer
    },

    data() {
        return {
            // data dummy
            videos: [
                {
                    id: 1,
                    title: "Title One",
                    thumbnail: "https://images.unsplash.com/photo-1605548109944-9040d0972bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 2,
                    title: "Title Two",
                    thumbnail: "https://images.unsplash.com/photo-1605453171056-1bf928a07ea7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 3,
                    title: "Title Three",
                    thumbnail: "https://images.unsplash.com/photo-1605447302541-bd14aa1417ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 4,
                    title: "Title Four",
                    thumbnail: "https://images.unsplash.com/photo-1605539586670-ae1191cd0e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 5,
                    title: "Title Five",
                    thumbnail: "https://images.unsplash.com/photo-1605577307559-5ffc86700cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 6,
                    title: "Title Six",
                    thumbnail: "https://images.unsplash.com/photo-1605429480986-cd7f3a7ff857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 7,
                    title: "Title Seven",
                    thumbnail: "https://images.unsplash.com/photo-1605559241652-b2165a83f931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                },
                {
                    id: 8,
                    title: "Title Eigth",
                    thumbnail: "https://images.unsplash.com/photo-1605559096835-2718aa6f1a20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    video: "https://static.videezy.com/system/resources/previews/000/000/417/original/100_0126.mp4"
                }
            ],

            // show hide the video-player
            isContinuesVideoPlayerShown: false
        };
    },

    mounted() {
        // video player will shown if time to continue from video player store state > 0
        this.isContinuesVideoPlayerShown = this.$store.state.videoPlayer.timeToContinue > 0;
    }
};
</script>

<style>
.home {
    width: 100%;
}

.home .wrapper {
    display: flex;
    flex-wrap: wrap;
}

.home .wrapper h1 {
    width: 100%;
}

.home .wrapper .item {
    width: 23%;
    flex: 1 1 auto;
    margin: 5px;
    padding-bottom: 10px;
}

.home .video-player {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    margin-right: 12px;
    margin-bottom: 12px;
}
</style>
