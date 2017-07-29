import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    'use strict';

    const carousel = function carousel(options) {

      // tslint:disable-next-line:prefer-const
      let _carousel: any = {

        paused: false,

        stopped: false,

        options: {
          speed: 3000,
          acceleration: 5,
          reverse: false,
          selector: '.c-carousel',
          slidesSelector: '.c-carousel__slides',
          leftArrowSelector: '.c-carousel__arrow--left',
          rightArrowSelector: '.c-carousel__arrow--right'
        },

        init: function init() {
          // tslint:disable-next-line:no-shadowed-variable
          const options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          // Copy options to this.options
          // tslint:disable-next-line:forin
          for (const prop in options) {
            // tslint:disable-next-line:curly
            if (!options.hasOwnProperty(prop)) break;
            this.options[prop] = options[prop];
          }

          // Cache nodes
          // tslint:disable-next-line:no-shadowed-variable
          const carousel = document.querySelector(options.selector || this.options.selector);
          const slides = this._slides = carousel.querySelector(this.options.slidesSelector);
          this._leftArrow = carousel.querySelector(this.options.leftArrowSelector);
          this._rightArrow = carousel.querySelector(this.options.rightArrowSelector);

          // Multiply speed value by the number of slides
          this.options.speed = this.options.speed * slides.children.length;

          // Set slides container width
          this.width = slides.offsetWidth;

          // Repeat elements
          slides.innerHTML = slides.innerHTML + slides.innerHTML + slides.innerHTML;

          this._registerEvents();
          this._animate();
        },
        _registerEvents: function _registerEvents() {
          const _this = this;

          const speed = this.options.speed;
          const reverse = this.options.reverse;

          this._rightArrow.addEventListener('mouseover', function () {
            _this.options.speed = speed / _this.options.acceleration;
            _this.options.reverse = false;
          });
          this._rightArrow.addEventListener('mouseleave', function () {
            _this.options.speed = speed;
            _this.options.reverse = reverse;
          });
          this._leftArrow.addEventListener('mouseover', function () {
            _this.options.speed = speed / _this.options.acceleration;
            _this.options.reverse = true;
          });
          this._leftArrow.addEventListener('mouseleave', function () {
            _this.options.speed = speed;
            _this.options.reverse = reverse;
          });

          // Pause when cursor is over carousel
          this._slides.addEventListener('mouseover', this.pause.bind(this));
          this._slides.addEventListener('mouseleave', this.start.bind(this));

          // Pause when cursor is over carousel
          window.addEventListener('resize', function () {
            _this.width = _this._slides.offsetWidth;
          });
        },
        pause: function pause() {
          this.paused = true;
        },
        start: function start() {
          this.paused = false;
        },
        stop: function stop() {
          this.stopped = true;
        },
        _animate: function _animate() {
          const _this2 = this;

          const slides = this._slides;
          const oneThird = slides.lastElementChild.getBoundingClientRect().right / 3;
          let framesCount = 0;
          let step = 0;
          let posX = 0;

          const animate = function animate() {
            if (!_this2.paused) {

              framesCount = _this2.options.speed * 60 / 1000;
              step = oneThird / framesCount;

              posX += _this2.options.reverse ? step : -step;

              slides.style.transform = 'translateX(' + posX + 'px)';

              if (_this2.options.reverse) {
                if (posX >= _this2.width - oneThird) {
                  posX = _this2.width - oneThird * 2;
                }
              } else {
                if (Math.abs(posX) >= oneThird * 2) {
                  posX = -oneThird;
                }
              }
            }
            // tslint:disable-next-line:no-unused-expression
            !_this2.stopped && requestAnimationFrame(animate);
          };
          animate();
        }
      };

      _carousel.init(options);

      return _carousel;
    };

    window.onload = function () {
      return carousel({
        selector: '.c-carousel'
      });
    };
  }

}
