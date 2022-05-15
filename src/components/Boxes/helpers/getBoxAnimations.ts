import gsap, { Bounce } from 'gsap';
import { getWeightedRandomItem } from '../../../helpers/getWeightedRandomItem';

export type BoxRootElement = HTMLDivElement;

interface Options {
    onComplete: () => void;
}

/**
 * Get random animation and use it to passed $el
 */
export const getBoxAnimations = function ($el: BoxRootElement, options: Options) {
    const timeline = gsap.timeline({ onComplete: () => options.onComplete() });
    const animations = [animationShowRotateHide, animationRotatingBouncingBall];
    const selectedAnimation = getWeightedRandomItem(animations, [10, 1]);

    return selectedAnimation($el, timeline);
};

/**
 * Element appear from bottom, rotate, scale up and disappear
 */
const animationShowRotateHide = function ($el: BoxRootElement, timeline: any) {
    timeline
        .from($el, { opacity: 0, y: 100, scale: 0, duration: 0.5 })
        .from($el, { delay: 0.2, rotationY: 720, duration: 0.5 })
        .to($el, { scale: 2.5, opacity: 0, duration: 0.1 });
};

/**
 * Element like a ball go up with rotation and bouncing fall down
 */
const animationRotatingBouncingBall = function ($el: BoxRootElement, timeline: any) {
    timeline.set($el, { y: 150 });
    timeline
        .from($el, { opacity: 0 })
        .to($el, { opacity: 1, y: 0, rotateZ: 360, duration: 0.5 })
        .to($el, { y: 150, duration: 1.25, ease: Bounce.easeOut })
        .to($el, { x: '+=250', duration: 2.5 }, '-=1.75')
        .to($el, { opacity: 0, duration: 0.2 });
};
