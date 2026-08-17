import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            this.renderer.addClass(
              this.element.nativeElement,
              'animate-section'
            );
          } else {
            this.renderer.removeClass(
              this.element.nativeElement,
              'animate-section'
            );
          }

        });

      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
