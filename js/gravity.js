
'use strict';

var Gravity = (function() {
  var Gravity = {};

  Gravity.DOWN = {
    name: 'DOWN',
    rotation: 0,
    cubeRotation: Math.PI / 2,

    yaw: 1,
    pitch: 1,

    direction: new THREE.Vector3(0, 0, -1),

    axial: {
      axis: 'z',
      forward: -1,
      backward: 1
    },

    stride: {
      axis: 'x',
      left: -1,
      right: 1
    },

    gravity: {
      axis: 'y',
      mult: -1
    }
  };

  Gravity.UP = {
    name: 'UP',
    rotation: Math.PI,
    cubeRotation: -Math.PI / 2,

    yaw: 1,
    pitch: -1,

    direction: new THREE.Vector3(0, 0, -1),

    axial: {
      axis: 'z',
      forward: -1,
      backward: 1
    },

    stride: {
      axis: 'x',
      left: 1,
      right: -1
    },

    gravity: {
      axis: 'y',
      mult: 1
    }
  };

  Gravity.LEFT = {
    name: 'LEFT',
    rotation: -Math.PI / 2,
    cubeRotation: 0,

    yaw: 1,
    pitch: -1,

    direction: new THREE.Vector3(0, 0, -1),

    axial: {
      axis: 'z',
      forward: -1,
      backward: 1
    },

    stride: {
      axis: 'y',
      left: -1,
      right: 1
    },

    gravity: {
      axis: 'x',
      mult: -1
    }
  };

  Gravity.RIGHT = {
    name: 'RIGHT',
    rotation: Math.PI / 2,
    cubeRotation: Math.PI,

    yaw: 1,
    pitch: 1,

    direction: new THREE.Vector3(0, 0, -1),

    axial: {
      axis: 'z',
      forward: -1,
      backward: 1
    },

    stride: {
      axis: 'y',
      left: 1,
      right: -1
    },

    gravity: {
      axis: 'x',
      mult: 1
    }
  };

  return Gravity;
})();
