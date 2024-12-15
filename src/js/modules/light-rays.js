// https://codepen.io/creativeocean/pen/ZEEOxmK
VANTA.FOG({
  el: "#water",
  highlightColor: 0xfff,
  midtoneColor: 0xfff,
  lowlightColor: 0x1ee,
  baseColor: 0x00f,
  blurFactor: 0.2,
  speed: 0.23,
  zoom: 0.25
})

new TimelineMax()
  .set('#bg', {rotationX:-36, transformPerspective:300, left:-99})
  .set('.ray', {width:1900, height:1000, left:-800, top:-560})
  .staggerFrom('.ray', 10, {cycle:{rotation:[360,-360], scale:[0.7,1.1]}, ease:Power0.easeNone, repeat:-1})