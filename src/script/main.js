import Animation from "./Animation.js";

class Content{

  constructor() {
    this.cta = document.getElementById('cta');
    this.play = document.body.querySelector('.play');
    this.pause = document.body.querySelector('.pause');
    this.audio = document.getElementById('audio-intro');
    this.content = document.body.querySelector('.content');
  }

  async init() { 
    this.cta.addEventListener('click', this.onClickCta);
    this.cta.addEventListener('mouseover', this.onMouseOverCta);
    this.cta.addEventListener('mouseout', this.onMouseOutCta); 
    this.play.addEventListener('mouseover', this.onMouseOverPlay);
    this.play.addEventListener('mouseout', this.onMouseOutPlay);
    this.pause.addEventListener('mouseover', this.onMouseOverPause);
    this.pause.addEventListener('mouseout', this.onMouseOutPause); 
    this.pause.addEventListener('click', this.onClickPause);
    this.play.addEventListener('click', this.onClickPlay);
    this.mainAnimation = new Animation({'cta': this.cta, 'audio': this.audio}).mainTimeline().pause();
  }

  onClickCta = () =>
  {
    this.clickCta = new Animation().disappearAnimation('#cta').play();
    this.mainAnimation.play();
    this.audio.play();
    this.cta.style.display = 'none';
  }

  onClickPlay = () =>
  {
    this.clickPlay = new Animation().disappearAnimation('.play').play();
    this.mainAnimation.play();
    this.audio.play();
    this.pause.style.display = 'initial';
    this.play.style.display = 'none';
  }

  onClickPause = () =>
  {
    this.clickPause = new Animation().disappearAnimation('.pause').play();
    this.mainAnimation.pause();
    this.audio.pause();
    this.play.style.display = 'initial';
    this.pause.style.display = 'none';
  }

  onMouseOverCta = () =>
  {
    this.hoverCta = new Animation().hoverAnimation('#cta').play();
  }

  onMouseOutCta = () =>
  {
    this.hoverCta.reverse();
  }

  onMouseOverPlay = () =>
  {
    this.hoverPlay = new Animation().hoverAnimation('.play').play();
  }

  onMouseOutPlay = () =>
  {
    this.hoverPlay.reverse();
  }

  onMouseOverPause = () =>
  {
    this.hoverPause = new Animation().hoverAnimation('.pause').play();
  }

  onMouseOutPause = () =>
  {
    this.hoverPause.reverse();
  }

  async start() {
    await this.init(); 
  }
}

const starsWars = new Content();
starsWars.start();