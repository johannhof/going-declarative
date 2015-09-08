import Bacon from 'baconjs';

// slide order with subslides
const slides = [
  {slide: 'home', sub: 0},
  {slide: 'intro', sub: 10},
  {slide: 'flow', sub: 4},
  {slide: 'about-bacon', sub: 3},
  {slide: 'how-bacon-works', sub: 7},
  {slide: 'bacon-and-react', sub: 1},
  {slide: 'from-the-trenches', sub: 5},
  {slide: 'what-about-flux', sub: 3},
  {slide: 'too-much-react', sub: 2},
  {slide: 'alternatives', sub: 0},
  {slide: 'the-end', sub: 0}
];

// very stupid router with built-in support for
// back and forward navigation with arrow keys

const location = Bacon
  .once()
  .merge(Bacon.fromEvent(window, 'popstate'))
  .map(function(){
    return {
      slide: document.location.pathname,
      sub: parseInt(document.location.hash.slice(1), 10) || 0
    };
  })
  .toProperty();

const navigation = location
  .take(1)
  .flatMapLatest(function(_loc){
    return Bacon
      .fromEvent(window, 'keyup')
      .scan(_loc, function(loc, e){
        let index = slides.findIndex(({slide}) => ~loc.slide.indexOf(slide));
        if(index === -1){
          index = 0;
        }
        let s = slides[index];
        let sub = loc.sub;
        if(e.keyCode === 39){
          e.preventDefault();
          sub += 1;
          if(sub > s.sub){
            s = slides[index + 1] || slides[slides.length - 1];
            sub = 0;
          }
        }else if(e.keyCode === 37){
          e.preventDefault();
          sub -= 1;
          if(sub < 0){
            s = slides[index - 1] || slides[0];
            sub = s.sub;
          }
        }
        return {slide: s.slide, sub: sub};
      });
  });

navigation.onValue(function({slide, sub}){
  history.pushState(null, "", slide + "#" + sub);
});

export default Bacon.mergeAll(location, navigation).toProperty();
