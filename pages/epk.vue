<template>
    <div>
        <Hero
        title="Electronic Press Kit"
        subtitle="Press releases, photos, artwork and bio"
        path="epk-bg-comp.jpg"
        ></Hero>

    <Row>
        <Section title="Press">
            <p><a href="/incaravans-press.zip" target="_blank">Click here</a> to download all files as a .zip archive</p>
            
            <ul class="epk-list">
                <li v-for="(item, i) in press" :key="i"><a :href="item.path" target="_blank"><img :src="require('@/assets/epk/thumbnails/pdf-thumbnail.png')" /> {{ item.title }}</a></li>
            </ul>
        </Section>

        <Section title="Artwork">

            <p><a href="/incaravans-artwork.zip" target="_blank">Click here</a> to download all files as a .zip archive</p>
            
            <ul class="epk-list">
                <li v-for="(item, i) in artwork" :key="i"><a :href="require('@/assets/' + item.path)" target="_blank"><img :src="require('@/assets/' + item.thumbnail)" /> {{ item.title }}</a></li>
            </ul>


        </Section>

        <Section prominent title="Images">

            <p><a href="/incaravans-press-images.zip" target="_blank">Click here</a> to download all full size, high resolution images as a .zip archive</p>
            
            <p>For individual photos, make sure to download the full size high resolution of the image by clicking it below. Please give credit to our photographer, <a href="https://www.instagram.com/madsterix/" target="_blank">@madsterix</a></p>

            <v-carousel>
                <v-carousel-item v-for="(item, i) in images" :key="i" :href="require('@/assets/' + item.path)" target="_blank" :src="require('@/assets/' + item.thumbnail)" contain>
                </v-carousel-item>
            </v-carousel>
        </Section>

        <Section prominent title="Lyrics">
            <p><a href="/incaravans-lyrics.zip" target="_blank">Click here</a> to download all files as a .zip archive</p>
            
            <ul class="epk-list">
                <li v-for="(item, i) in lyrics" :key="i"><a :href="item.path" target="_blank"><img :src="require('@/assets/epk/thumbnails/pdf-thumbnail.png')" /> {{ item.title }}</a></li>
            </ul>
        </Section>
    </Row>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from "@/components/Hero.vue"
import Row from "@/components/Row.vue"
import Section from "@/components/Section.vue"

export default Vue.extend({
    name: "Epk",
    components: {
        Hero,
        Section,
        Row
    },
    head: {
        title: "Electronic Press Kit",
        titleTemplate: "%s",
        meta: [
            {name: "robots", content: "noindex"}
        ]
    },
    data: () => ({
        press: [
            {
                title: "Bio",
                path: "/press/In_Caravans_Bio.pdf"
            },
            {
                title: "In Caravans Press",
                path: "/press/InCaravans_Press.pdf"
            },
            {
                title: "Sideways Press Release",
                path: "/press/Sideways_press.pdf"
            },
            {
                title: "Real Emotion Press Release",
                path: "/press/Real_Emotion_Press.pdf"
            },
            {
                title: "Real Emotion Press Release (Danish)",
                path: "/press/Real_Emotion_Press_danish.pdf"
            },
        ],
        images: [
            {
                path: "epk/images/IN CARAVANS HEADER.jpg",
                thumbnail: "epk/thumbnails/IN CARAVANS HEADER-thumbnail.jpg",
            },
            {
                path: "epk/images/MITPICK1.jpg",
                thumbnail: "epk/thumbnails/MITPICK1-thumbnail.jpg",
            },
            {
                path: "epk/images/MITPICK2.jpg",
                thumbnail: "epk/thumbnails/MITPICK2-thumbnail.jpg",
            },
            {
                path: "epk/images/MITPICK3.jpg",
                thumbnail: "epk/thumbnails/MITPICK3-thumbnail.jpg",
            },
            {
                path: "epk/images/MITPICK4.jpg",
                thumbnail: "epk/thumbnails/MITPICK4-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers1.jpg",
                thumbnail: "epk/thumbnails/Vers1-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers2.jpg",
                thumbnail: "epk/thumbnails/Vers2-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers3.jpg",
                thumbnail: "epk/thumbnails/Vers3-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers4.jpg",
                thumbnail: "epk/thumbnails/Vers4-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers5.jpg",
                thumbnail: "epk/thumbnails/Vers5-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers6.jpg",
                thumbnail: "epk/thumbnails/Vers6-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers7.jpg",
                thumbnail: "epk/thumbnails/Vers7-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers8.jpg",
                thumbnail: "epk/thumbnails/Vers8-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers9.jpg",
                thumbnail: "epk/thumbnails/Vers9-thumbnail.jpg",
            },
            {
                path: "epk/images/Vers10.jpg",
                thumbnail: "epk/thumbnails/Vers10-thumbnail.jpg",
            }
        ],
        artwork: [
            {
                title: "Sideways cover",
                path: "epk/artwork/sideways.1400x1400.jpg",
                thumbnail: "epk/thumbnails/sideways.1400x1400-thumbnail.png"
            },
            {
                title: "Real Emotion cover",
                path: "epk/artwork/realemotion.incaravans.jpg",
                thumbnail: "epk/thumbnails/realemotion.incaravans-thumbnail.png"
            },
            {
                title: "Courier cover",
                path: "epk/artwork/CourierCoverHighRes.jpg",
                thumbnail: "epk/thumbnails/CourierCoverHighRes-thumbnail.png"
            },
            {
                title: "Maybe cover",
                path: "epk/artwork/maybefinalRGB.jpg",
                thumbnail: "epk/thumbnails/maybefinalRGB-thumbnail.png"
            },
            {
                title: "Sunken Streets cover",
                path: "epk/artwork/SunkenStreetsCover.jpg",
                thumbnail: "epk/thumbnails/SunkenStreetsCover-thumbnail.png"
            },
        ],
        lyrics: [
            {
               title: "Real Emotion lyrics",
               path: "/lyrics/Real_Emotion_lyrics.pdf" 
            },
            {
               title: "Sideways lyrics",
               path: "/lyrics/Sideways_lyrics.pdf" 
            }
        ]
    })
})
</script>

<style lang="scss" scoped>
ul.epk-list {
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: 0;
    padding-left: 0;

    li {
        border-top: 1px solid;
        border-color: #777;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;

        &:last-child {
            border-bottom: 1px solid;
            border-color: #777;
        }

        &:hover {
            background-color: #444;
        }

        a {
            text-decoration: none;
            color: white;
            display: flex;
            align-items: center;

            img {
                margin-right: 2rem;
            }
        }
    }
}
</style>
