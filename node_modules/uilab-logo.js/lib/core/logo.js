"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _svg = _interopRequireDefault(require("svg.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_OPTIONS = {
  size: 300,
  smallRadius: 0.035,
  bigRadius: 0.08,
  interval: 500,
  duration: 200,
  rotate: true,
  animation: [{
    enlarge: [[0, 1]],
    color: [[0, 1]]
  }, {
    enlarge: [[1, 1]]
  }, {
    enlarge: [[2, 1], [2, 2]]
  }, {
    enlarge: [[3, 1], [3, 3]]
  }, {
    wait: 4
  }],
  defaultColor: '#DDDDDD',
  colors: ['#1C3D98', '#4285F4', '#66D04F', '#FEEC4A', '#E32170', '#D4161B', '#2CA48F']
};

class Logo {
  constructor(element, options) {
    this.options = _objectSpread({}, DEFAULT_OPTIONS, options || {});
    const size = this.options.size;
    this.svg = (0, _svg.default)(element).viewbox(0, 0, size, size);
    this.logo = this.svg.group();
    this.drawCircles();
    this.repeat();
  }

  drawCircles() {
    const _this$options = this.options,
          size = _this$options.size,
          smallRadius = _this$options.smallRadius,
          defaultColor = _this$options.defaultColor;
    this.circleMatrix = [];
    this.circles = [];

    for (let i = 1; i <= 4; i++) {
      const circleRow = [];

      for (let j = 1; j <= 4; j++) {
        const circle = this.logo.circle().radius(size * smallRadius).fill(defaultColor).stroke('transparent').attr({
          cx: size * 0.2 * j,
          cy: size * 0.2 * i
        });
        circleRow.push(circle);
        this.circles.push(circle);
      }

      this.circleMatrix.push(circleRow);
    }
  }

  getCircle(p) {
    return this.circleMatrix[p[0]][p[1]];
  }

  getRandInt(a, b) {
    return Math.floor(Math.random() * b + a);
  }

  getRandomColor() {
    const colors = this.options.colors;
    const randIndex = this.getRandInt(0, colors.length);
    return colors[randIndex];
  }

  resetCircles() {
    const _this$options2 = this.options,
          size = _this$options2.size,
          smallRadius = _this$options2.smallRadius,
          duration = _this$options2.duration,
          defaultColor = _this$options2.defaultColor;
    this.circles.map(circle => {
      circle.animate(duration).fill(defaultColor).radius(size * smallRadius);
    });
  }

  async play() {
    const _this$options3 = this.options,
          animation = _this$options3.animation,
          bigRadius = _this$options3.bigRadius,
          duration = _this$options3.duration,
          size = _this$options3.size,
          rotate = _this$options3.rotate;

    if (rotate) {
      const rotation = this.getRandInt(0, 3) * 90;
      this.logo.transform({
        rotation,
        cx: size * 0.5,
        xy: size * 0.5
      });
    }

    for (const frame of animation) {
      const colorPoints = frame.color || [];
      colorPoints.forEach(p => {
        this.getCircle(p).fill(this.getRandomColor());
      });
      const enlargePoints = frame.enlarge || [];
      enlargePoints.forEach(p => {
        this.getCircle(p).animate(duration).radius(size * bigRadius);
      });
      const waitCount = frame.wait || 1;

      for (let i = 0; i < waitCount; i++) {
        await this.tick();
      }
    }

    this.resetCircles();
    await this.tick();
  }

  async repeat() {
    while (true) {
      await this.play();
    }
  }

  async tick() {
    const interval = this.options.interval;
    return new Promise((resolve, reject) => setTimeout(() => resolve(), interval));
  }

}

exports.default = Logo;