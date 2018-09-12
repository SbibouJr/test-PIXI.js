import { Application, Text } from 'pixi.js';

import appConfig from './../config/app.js';

class App {
  constructor() {
    this.app = new Application(appConfig);
    this.changeBackgroundColor(0xFFFFFF);
    this.fullSize();

    const text = new Text('Welcome, i am PIXI');
    text.position.set(this.getRendererWidth()/2 - text.width/2, this.getRendererHeight()/2 - text.height/2);
    this.app.stage.addChild(text);
    this.app.ticker.add(() => {
      text.rotation += 0.01;
    });
  }

  start() {
    document.body.appendChild(this.app.view);
  }

  changeBackgroundColor(color = 0x000000) {
    this.app.renderer.backgroundColor = color;
  }

  getRendererWidth () {
    return this.app.renderer.view.width;
  }

  getRendererHeight () {
    return this.app.renderer.view.height;
  }

  setRendererWidth (width = this.getRendererWidth()) {
    this.app.renderer.resize(width, this.getRendererHeight());
  }

  setRendererHeight (height = this.getRendererHeight()) {
    this.app.renderer.resize(this.getRendererWidth(), height);
  }


  fullSize() {
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);
  }
}

export default App;
