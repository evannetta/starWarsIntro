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

  createStars = () =>{
    const sky = document.querySelector('.sky');
    let stars = [];
    let starsColors = ['antiquewhite', 'darkgray', 'gray', 'slategray'];
    let star;
    for( let index = 0; index < 300; index++) {
      stars.push(
        { color: starsColors[index % starsColors.length],
          top: Math.floor(Math.random() * 700),
          left: Math.floor(Math.random() * 970),
          scale:  Math.random() * 2 ,
        });
      star = document.createElement("div");
      star.className = 'star';
      star.style.top = stars[index].top + 'px';
      star.style.left = stars[index].left + 'px';
      star.style.backgroundColor = stars[index].color;
      star.style.transform = `scale(${stars[index].scale})`;
      sky.appendChild(star);
    };
    
    
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
    .set('.plane', {css:{rotateX: 45}, ease:Power2.easeOut}, '<-4')
    .to('.intro-text', 50, { top: -550, ease: 'none'}, '<')
    .to('.intro-text', 3, { opacity: 0, ease:Power2.easeOut}, '>-3')
    
    .to('.star', 8, {y: "random(0, -100, 2)", z: "random(0, -100, 10)", x: "random(0, 20, 2)", ease: "sine.inOut", onStart : this.createStars()}, '>-1')
    .to('.sky', 8, {scaleX: 1.1, rotateX: '-=15', ease: "sine.inOut"}, '<')
    .to('.sky', 1, {opacity: 0, ease: "sine.inOut"}, '>-1')
  }
}
