import type {ArknightsConfig} from "./src/_types/ArknightsConfig"
import {CopyrightMini, IconArchive, IconGitHub, TitleArknights} from "./src/components/SvgIcons"
import React from "react";

export default {
    title: "Arknights",
    description: "",
    language: "zh",
    bgm: {
        autoplay: false,

        // https://web.hycdn.cn/arknights/official/_next/static/media/audio/bgm.ea4286.mp3
        src: import.meta.env.BASE_URL + "audios/bgm.mp3"
    },
    navbar: {
        logo: {
            element: <TitleArknights className="pointer-events-none"/>,
            alt: "Arknights Logo"
        },
        items: [
            {title: "INDEX", subtitle: "首页", href: import.meta.env.BASE_URL + "#index"},
            {title: "INFORMATION", subtitle: "情报", href: import.meta.env.BASE_URL + "#information"},
            {title: "OPERATOR", subtitle: "干员", href: import.meta.env.BASE_URL + "#operator"},
            {title: "WORLD", subtitle: "设定", href: import.meta.env.BASE_URL + "#world"},
            {title: "MEDIA", subtitle: "泰拉万象", href: import.meta.env.BASE_URL + "#media"},
            {title: "MORE", subtitle: "更多内容", href: import.meta.env.BASE_URL + "#more"},
        ],
    },
    pageTracker: {
        microInfo: "ARKNIGHTS",
        labels: ["HOMEPAGE", "INFORMATION", "OPERATOR", "WORLD", "ABOUT TERRA", "MORE"],
    },
    rootPage: {
        INDEX: {
            title: "ARKNIGHTS",
            subtitle: "RHODES ISLAND",
            url: "HTTPS://ARKNIGHTS.ASTRO.YUE.ZONE/",
            copyright: <CopyrightMini className="pointer-events-none"/>,
            heroActions: [
                {
                    icon: <IconArchive className="w-full h-auto pointer-events-none"/>,
                    label: "文档",
                    subLabel: "Documentation",
                    target: "_self",
                    href: import.meta.env.BASE_URL + "docs/",
                    className: "text-black bg-ark-blue border-[#2bf] hover:border-white font-bold font-benderBold",
                },
                {
                    // TODO: 换个好看的图标
                    icon: <svg className="w-full h-auto pointer-events-none" fillRule="evenodd" fill="currentColor"
                               viewBox="0 0 1024 1024">
                        <path
                            d="M856.874667 448l51.285333 30.762667a21.333333 21.333333 0 0 1 0 36.608L512 753.066667l-396.16-237.696a21.333333 21.333333 0 0 1 0-36.608l51.285333-30.762667L512 654.933333l344.874667-206.933333z m0 200.533333l51.285333 30.762667a21.333333 21.333333 0 0 1 0 36.608l-374.186667 224.512a42.666667 42.666667 0 0 1-43.946666 0l-374.186667-224.512a21.333333 21.333333 0 0 1 0-36.608l51.285333-30.762667L512 855.466667l344.874667-206.933334zM533.930667 55.850667l374.229333 224.512a21.333333 21.333333 0 0 1 0 36.608L512 554.666667 115.84 316.970667a21.333333 21.333333 0 0 1 0-36.608l374.186667-224.512a42.666667 42.666667 0 0 1 43.946666 0z"/>
                    </svg>,
                    label: "博客 - Blog",
                    // subLabel: "Blog",
                    target: "_self",
                    href: import.meta.env.BASE_URL + "blog/",
                    className: "text-black bg-end-yellow border-[#fe2] hover:border-white font-bold font-benderBold",
                },
                {
                    icon: <IconGitHub className="w-full h-auto pointer-events-none"/>,
                    label: "GitHub",
                    subLabel: "Repository",
                    href: "https://github.com/Yue-plus/astro-arknights",
                    className: "text-white bg-black border-[#333] hover:border-white font-benderBold",
                },
            ],
        },
        INFORMATION: {
            swiperInfoProps: []
        },
    }
} as ArknightsConfig
