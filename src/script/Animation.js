export default class Animation {

  constructor(obj){
    this.obj = obj;   
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

  mainTimeline = () =>{
    this.tl = gsap.timeline({onComplete: () => {
      this.obj.audio.pause();
      this.obj.cta.style.display = 'initial';
      this.obj.cta.style.opacity = 0.9;
      this.tl.progress(0).pause();
    }});
    this.tl.to('.content', {opacity: 1, duration: 0.2})
      .set('.pause', {display: 'initial'})
      .to('.headline', {opacity: 1, duration: 0.2}, '<')
      .from('.headline', {scale: 15, duration: 12, ease: "sine.inOut"}, '<')
      .to('.headline', {opacity: 0, duration: 1}, '>-1')
      .set('.plane', {css:{rotateX: 45}, ease:Power2.easeOut}, '<-4')
      .to('.intro-text', 50, { top: -550, ease: 'none'}, '<')
      .to('.intro-text', 3, { opacity: 0, ease:Power2.easeOut}, '>-3')
      .to('.star', 8, {y: "random(0, -100, 2)", z: "random(0, -100, 10)", x: "random(0, 20, 2)", ease: "sine.inOut", onStart : this.createStars()}, '>-2')
      .to('.sky', 8, {scaleX: 1.1, rotateX: '-=15', ease: "sine.inOut"}, '<')
      .to('.sky', 1, {opacity: 0, ease: "sine.inOut"}, '>-1');
    return this.tl;
  }

  disappearAnimation = (obj) => {
    const tl = gsap.timeline();
    tl.to(obj, {opacity: 0, duration: 0.5})
    return tl;
  }

  hoverAnimation = (obj) => {
    const tl = gsap.timeline();
    tl.fromTo(obj, {scale: 1, opacity:0.9},{scale: 1.05, opacity:1, duration: 0.2})
    return tl;
  }
}