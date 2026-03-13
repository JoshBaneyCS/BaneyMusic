export default function createBaneyLightStylesheet(accent) {
  return `
.react-jinke-music-player-main svg:active,
.react-jinke-music-player-main svg:hover {
    color: ${accent}
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle,
.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-track {
    background-color: ${accent}
}

.react-jinke-music-player-main ::-webkit-scrollbar-thumb {
    background-color: ${accent};
}

.react-jinke-music-player-main .music-player-panel .panel-content .rc-slider-handle:active {
    box-shadow: 0 0 2px ${accent}
}

.react-jinke-music-player-main .audio-item.playing svg {
    color: ${accent}
}

.react-jinke-music-player-main .audio-item.playing .player-singer {
    color: ${accent} !important
}

.audio-lists-panel-content .audio-item.playing,
.audio-lists-panel-content .audio-item.playing svg {
    color: ${accent}
}

.audio-lists-panel-content .audio-item:active .group:not([class=".player-delete"]) svg,
.audio-lists-panel-content .audio-item:hover .group:not([class=".player-delete"]) svg {
    color: ${accent}
}
`
}
