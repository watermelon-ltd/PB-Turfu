import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();
       console.log("hallo");
 
    //    document.getElementById('address_button').addEventListener('click', e => {
    //      const address = document.getElementById('address').value;
    //     console.log("connect button");
    // });
    
        obs.connect({
        address: 'localhost:4444/'
        });


       obs.on('ConnectionOpened', () => {
           console.log("CONNECTED");
         obs.send('GetSceneList').then(data => {
           const sceneListDiv = document.getElementById('scene_list');
 
           data.scenes.forEach(scene => {
             const sceneElement = document.createElement('button');
             sceneElement.textContent = scene.name;
             sceneElement.onclick = function() {
               obs.send('SetCurrentScene', {
                 'scene-name': scene.name
               });
             };
 
             sceneListDiv.appendChild(sceneElement);
           });
         })
       });