import fitText from '@mediamonks/temple/util/fitText';
import { GSDevTools } from 'gsap/dist/GSDevTools';
export default class Banner {

  constructor(config) {

    // add required components here
    this.config = config;
  }

  async init() {
    if (DEVELOPMENT) {
      gsap.registerPlugin(GSDevTools);
      GSDevTools.create({animation: this.animation.getTimeline(), globalSync: false});
    }
  }

  setAnimation(animation){
    this.animation = animation;
  }

  handleExit = () => {
    window.open(window.clickTag, '_blank');
    this.animation.getTimeline().progress(1);
  };

  /**
   * When client clicks this function will be triggerd.
   */
  handleClick = () => {
    this.handleExit();
  };

  /**
   * When mouse rolls over unit.
   */
  handleRollOver = () => {

  };

  /**
   * When mouse rolls out unit.
   */
  handleRollOut = () => {

  };

  async start() {
    await this.init();

    this.animation.play();
  }
}

