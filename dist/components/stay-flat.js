AFRAME.registerComponent('stay-flat', {
    init: function () {
       
    },
    remove: function () {
  
    },
    update: function () {
  
    },
    tick: function (elapsed, dt) {
        this.el.object3D.rotation.x = 0;
        this.el.object3D.rotation.y = 0;
        this.el.object3D.rotation.z = 0;

        // console.log("x : " + this.el.object3D.rotation.x + "y : " + this.el.object3D.rotation.y + "z : " + this.el.object3D.rotation.z);


    }
  })