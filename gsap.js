var nav = gsap.timeline();
nav.from('.imglogo', {duration: 1, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 0 });
nav.from('.schoolname', {duration: 1, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 0 });

nav.from('.centernav', {duration: 1, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 0});
nav.from('.rightnav', {duration: 1, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 0});
nav.from('.img2', {duration: 5, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 0});
gsap.from('.car', {duration: 5, x: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 2}); 
gsap.from('.heroconbef', {duration: 5, x: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 3});
gsap.from('.heroconaft', {duration: 5, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 4});
gsap.from('.learn', {duration: 5, x: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 5});
gsap.from('.play', {duration: 5, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 6});
gsap.from('.we', { color:"#9C28B2", duration: 5, x: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 7});
gsap.from('.grow', {duration: 5, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 8});
gsap.from('.your', {  color:"#9C28B2" ,duration: 5, x: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 9});
gsap.from('.book', {duration: 5, y: -200, opacity: 0, scale: 0.5, ease: 'bounce', delay: 10});

