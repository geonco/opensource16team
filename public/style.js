$(document).ready(function () {
  $('.button--bubble').each(function () {
    var $circlesTopLeft = $(this).parent().find('.circle.top-left');
    var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

    var tl = gsap.timeline();
    var tl2 = gsap.timeline();

    var btTl = gsap.timeline({ paused: true });

    tl.to($circlesTopLeft, {
      duration: 1.2,
      x: -25,
      y: -25,
      scaleY: 2,
      ease: "slow(0.1, 0.7, false)"
    });
    tl.to($circlesTopLeft.eq(0), { duration: 0.1, scale: 0.2, x: '+=6', y: '-=2' });
    tl.to($circlesTopLeft.eq(1), { duration: 0.1, scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
    tl.to($circlesTopLeft.eq(2), { duration: 0.1, scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
    tl.to($circlesTopLeft.eq(0), { duration: 1, scale: 0, x: '-=5', y: '-=15', opacity: 0 });
    tl.to($circlesTopLeft.eq(1), { duration: 1, scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
    tl.to($circlesTopLeft.eq(2), { duration: 1, scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

    var tlBt1 = gsap.timeline();
    var tlBt2 = gsap.timeline();

    tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
    tlBt1.add(tl);

    tl2.set($circlesBottomRight, { x: 0, y: 0 });
    tl2.to($circlesBottomRight, {
      duration: 1.1,
      x: 30,
      y: 30,
      ease: "slow(0.1, 0.7, false)"
    });
    tl2.to($circlesBottomRight.eq(0), { duration: 0.1, scale: 0.2, x: '-=6', y: '+=3' });
    tl2.to($circlesBottomRight.eq(1), { duration: 0.1, scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
    tl2.to($circlesBottomRight.eq(2), { duration: 0.1, scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
    tl2.to($circlesBottomRight.eq(0), { duration: 1, scale: 0, x: '+=5', y: '+=15', opacity: 0 });
    tl2.to($circlesBottomRight.eq(1), { duration: 1, scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
    tl2.to($circlesBottomRight.eq(2), { duration: 1, scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

    tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
    tlBt2.add(tl2);

    btTl.add(tlBt1);
    btTl.to($(this).parent().find('.button.effect-button'), { duration: 0.8, scaleY: 1.1 }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to($(this).parent().find('.button.effect-button'), { duration: 1.8, scale: 1, ease: "elastic.out(1.2, 0.4)" }, 1.2);

    btTl.timeScale(2.6);

    $(this).on('mouseover', function () {
      btTl.restart();
    });
  });
});
