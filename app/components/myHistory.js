//History Trials
import createHistory from 'history/createBrowserHistory'
const myHistory = createHistory()
//const location = myHistory.location

myHistory.listen(function(loc){

  //console.log(loc.action);
  //console.log(loc.state);

  if (loc.action === 'POP') {
        console.log("Pop");
        return;
    }
  else if (loc.state && loc.state.scroll !== undefined && !loc.state.scroll) {
      console.log("no scrolls");
      return;
  }
  else{
    console.log("else scroll up");
    window.scrollTo(0, 0);
  }

});

export default myHistory
