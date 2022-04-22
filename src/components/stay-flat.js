AFRAME.registerComponent('stay-flat', {
    init: function () {
        console.log(this.el.object3D)
        console.log("flllllllllllllllllllllllllllllllllllllllat")
    },
    remove: function () {
  
    },
    update: function () {
  
    },
    tick: function (elapsed, dt) {
        this.el.object3D.rotation.x = 0;
        this.el.object3D.rotation.y = 0;
        this.el.object3D.rotation.z = 0;


    }
  })