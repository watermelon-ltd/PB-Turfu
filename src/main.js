
// function importAll(r) {
//     r.keys().forEach(r);
//   }
  
  importAll(require.context('./components', false, /\.js$/));

  import './lib/obs-websocket';
  import './lib/screen-capture';
  import 'css/style.css'
