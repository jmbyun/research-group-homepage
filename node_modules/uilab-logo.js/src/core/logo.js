import SVG from 'svg.js';

const DEFAULT_OPTIONS = {
    size: 300,
    smallRadius: 0.035,
    bigRadius: 0.08,
    interval: 500,
    duration: 200,
    rotate: true,
    animation: [
        { enlarge: [[0, 1]], color: [[0, 1]] },
        { enlarge: [[1, 1]] },
        { enlarge: [[2, 1], [2, 2]] },
        { enlarge: [[3, 1], [3, 3]] },
        { wait: 4 },
    ],
    defaultColor: '#DDDDDD',
    colors: [
        '#1C3D98', 
        '#4285F4', 
        '#66D04F', 
        '#FEEC4A', 
        '#E32170', 
        '#D4161B', 
        '#2CA48F',
    ],
};

export default class Logo {
    constructor(element, options) {
        this.options = {
            ...DEFAULT_OPTIONS,
            ...(options || {}),
        };
        const { size } = this.options;
        this.svg = SVG(element)
            .viewbox(0, 0, size, size);
        this.logo = this.svg.group();
        this.drawCircles();
        this.repeat();
    }

    drawCircles() {
        const { size, smallRadius, defaultColor } = this.options;
        this.circleMatrix = [];
        this.circles = [];
        for (let i = 1; i <= 4; i++) {
            const circleRow = [];
            for (let j = 1; j <= 4; j++) {
                const circle = this.logo
                    .circle()
                    .radius(size * smallRadius)
                    .fill(defaultColor)
                    .stroke('transparent')
                    .attr({ cx: size * 0.2 * j, cy: size * 0.2 * i });
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
        return Math.floor((Math.random() * b) + a);
    }

    getRandomColor() {
        const { colors } = this.options;
        const randIndex = this.getRandInt(0, colors.length);
        return colors[randIndex];
    }

    resetCircles() {
        const { size, smallRadius, duration, defaultColor } = this.options;
        this.circles.map(circle => {
            circle.animate(duration)
                .fill(defaultColor)
                .radius(size * smallRadius);
        });
    }

    setDefaultColor(color) {
        this.options.defaultColor = color;
        this.circles.map(circle => {
            if (circle !== this.circleMatrix[0][1]) {
                circle.fill(color);
            }
        });
    }

    async play() {
        const { animation, bigRadius, duration, size, rotate } = this.options;
        if (rotate) {
            const rotation = this.getRandInt(0, 3) * 90;
            this.logo.transform({ rotation, cx: size * 0.5, xy: size * 0.5 });
        }
        for (const frame of animation) {
            const colorPoints = (frame.color || []);
            colorPoints.forEach(p => {
                this.getCircle(p)
                    .fill(this.getRandomColor());
            });
            const enlargePoints = (frame.enlarge || []);
            enlargePoints.forEach(p => {
                this.getCircle(p)
                    .animate(duration)
                    .radius(size * bigRadius);
            });
            const waitCount = (frame.wait || 1);
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
        const { interval } = this.options;
        return new Promise((resolve, reject) => setTimeout(() => resolve(), interval));
    }
}