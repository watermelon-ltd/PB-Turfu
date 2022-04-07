
function importAll(r) {
    r.keys().forEach(r);
  }
  
  importAll(require.context('./components', false, /\.js$/));

  import 'lib/obs-websocket';
  import 'css/style.css';