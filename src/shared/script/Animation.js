import FrameAnimation from "@mediamonks/temple/animation/FrameAnimation"

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container) {
    super();

    this.container = container;
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl){
    tl
    .to('.headline', {opacity: 1, duration: 0.2, delay: 1})
    .from('.headline', {scale: 15, duration: 12, ease: "sine.inOut"}, '>')
    .to('.headline', {opacity: 0, duration: 1}, '>-1')
    // .fromTo('intro-wrapper', .05, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, immediateRender:true})
    .set('.plane', {css:{rotateX: 45}, ease:Power2.easeOut}, '<-4')
    .to('.intro-text', 50, { top: -550, ease: 'none'}, '<')
    .to('.intro-text', 3, { opacity: 0, ease:Power2.easeOut}, '>-3')
  }
}
