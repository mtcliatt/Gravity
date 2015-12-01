
'use strict';

/**
 * Creates an instance of GPointerLockControls
 * @constructor
 * @param {object} camera the camera of the scene
 * @param {object} gravity the gravity currently in effect
 * @param {number} speed the speed at which the camera will move
 *                       (not currently used)
 */
function GPointerLockControls (camera, gravity, speed) {
	var self = this;

	camera.rotation.set(0, 0, 0);

	self.pitchObject = new THREE.Object3D();
	self.pitchObject.add(camera);
	self.yawObject = new THREE.Object3D();

	self.yawObject.add(self.pitchObject);

  self.gListeners = [];
  self.dListeners = [];

  self.canShift = true;
  self.canJump = true;
  self.turning = false;

  self.setGravity(gravity);

  self.velocity = new THREE.Vector3();

  self.direction = new THREE.Vector3(0, 0, -1);
	self.rotation = new THREE.Euler(0, 0, 0, "YXZ");

  self.forward = {
    move: false,
    disable: false
  };
  self.backward = {
    move: false,
    disable: false
  };
  self.left = {
    move: false,
    disable: false
  };
  self.right = {
    move: false,
    disable: false
  };

	document.addEventListener('mousemove', self._onMouseMove.bind(self), false);
  document.addEventListener('keydown', self._onKeyDown.bind(self), false);
  document.addEventListener('keyup', self._onKeyUp.bind(self), false);

	self.enabled = false;
}

/**
 * Updates the control object
 * #update
 * @param {number} delta the time difference between calls
 *                       (may be moved internally)
 * @param {array} objects the objects that may be collided with
 */
GPointerLockControls.prototype.update = function(delta, objects) {
  var self = this;

  if(!self.enabled) {
    return;
  }

  if(self.turning) {
    self._updateTurn(delta);
  } else {
    self._updateDisable(objects);
    self._updateVelocity(delta);
    self._updateGravity(delta, objects);

    // translate camera
    self.yawObject.translateX(self.velocity.x * delta);
    self.yawObject.translateZ(self.velocity.z * delta);
    self.yawObject.translateY(self.velocity.y * delta);
  }
};

GPointerLockControls.prototype._updateTurn = function(delta) {
  var self = this;

  var dz = delta * Math.PI;
  if(self.yawObject.rotation.z < self.gravity.rotation) {
    if(self.yawObject.rotation.z + dz > self.gravity.rotation) {
      self.yawObject.rotation.z = self.gravity.rotation;
    } else {
      self.yawObject.rotation.z += dz;
    }
  } else if(self.yawObject.rotation.z > self.gravity.rotation) {
    if(self.yawObject.rotation.z - dz < self.gravity.rotation) {
      self.yawObject.rotation.z = self.gravity.rotation;
    } else {
      self.yawObject.rotation.z -= dz;
    }
  } else {
    self.turning = false;
  }
};

/**
 * Update the disabled attribute of directions
 * #_updateDisable
 */
GPointerLockControls.prototype._updateDisable = function(objects) {
  var self = this;

  self.forward.disable = false;
  self.backward.disable = false;
  self.left.disable = false;
  self.right.disable = false;

  var view = self.getDirection(new THREE.Vector3());
  view[self.gravity.gravity.axis] = 0;

  var rot = [0, Math.PI / 2, Math.PI, -Math.PI / 2];

  var affected = ['forward', 'left', 'backward', 'right'];

  var epsilon = 10;
  var euler = new THREE.Euler(0, 0, 0);
  var dir = new THREE.Vector3(0, 0, 0);
  for(var i = 0; i < rot.length; i++) {
    euler[self.gravity.gravity.axis] = rot[i];
    dir.copy(view).applyEuler(euler);

    var raycaster = new THREE.Raycaster(self.yawObject.position,
                                        dir, 0, epsilon);

    var intersects = raycaster.intersectObjects(objects);
    if(intersects.length) {
      var distance = intersects[0].distance;

      if(distance <3 /*you*/) {
        var d = 3 - distance;

        if(affected[i] === 'forward') {
          self.yawObject.translateZ(d);
        }

        if(affected[i] === 'backward') {
          self.yawObject.translateZ(-d);
        }

        if(affected[i] === 'left') {
          self.yawObject.translateX(d);
        }

        if(affected[i] === 'right') {
          self.yawObject.translateX(-d);
        }
      }

      disable(affected[i]);
    }
  }

  function disable(key) {
    self[key].move = false;
    self[key].disable = true;
  }
};

/**
 * Update the velocity of the camera
 * #_updateVelocity
 * @param {number} delta the time since last call
 */
GPointerLockControls.prototype._updateVelocity = function(delta) {
  var self = this;

  if(!self.forward.move && !self.backward.move) {
    self.velocity.z = 0;
  }

  if(!self.left.move && !self.right.move) {
    self.velocity.x = 0;
  }

  if(self.forward.move) {
    self.velocity.z = Math.max(-60, self.velocity.z - (400 * delta));
  }

  if(self.backward.move) {
    self.velocity.z = Math.min(60, self.velocity.z + (400 * delta));
  }

  if(self.left.move) {
    self.velocity.x = Math.max(-60, self.velocity.x - (400 * delta));
  }

  if(self.right.move) {
    self.velocity.x = Math.min(60, self.velocity.x + (400 * delta));
  }
};

/**
 * Update the effect of gravity on the camera
 * #_updateGravity
 * @param {number} delta the time since last call
 * @param {array} objects the objects that the camera may run into
 */
GPointerLockControls.prototype._updateGravity = function(delta, objects) {
  var self = this;

  self.velocity.y -= 9.8 * 100 * delta;

  self.raycaster.ray.origin.copy(self.yawObject.position);
  self.raycaster.ray.origin[self.gravity.gravity.axis] +=
    self.gravity.gravity.mult * 10;

  self.raycaster.far = Math.abs(self.velocity.y * delta);

  var intersects = self.raycaster.intersectObjects(objects);
  if(intersects.length) {
    var distance = intersects[0].distance;
    self.yawObject.translateY(-distance);

    self.velocity.y = Math.max(0, self.velocity.y);
    self.canShift = true;
    self.canJump = true;
    self.emitGravityEvent();
  }
};

/**
 * Returns the object3d of the controls
 * #getObject
 * @returns {object}
 */
GPointerLockControls.prototype.getObject = function() {
  var self = this;

  return self.yawObject;
};

/**
 * Returns the directional facing of the controls
 * #getDirection
 * @param {object} v the vector the become the direction vector
 * @returns {object}
 */
GPointerLockControls.prototype.getDirection = function(v) {
  var self = this;

  self.rotation[self.gravity.gravity.axis] =
    self.gravity.yaw * self.yawObject.rotation[self.gravity.gravity.axis];
  self.rotation[self.gravity.stride.axis] =
    self.gravity.pitch * self.pitchObject.rotation.x;
  self.rotation.z = 0;

	v.copy(self.gravity.direction).applyEuler(self.rotation);

  if(self.gravity == Gravity.LEFT || self.gravity == Gravity.RIGHT) {
    v.x = (v.z > 0) ? -v.x : v.x;
  }

	return v;
};

/**
 * Disposes the controls by cleaning up listeners
 * #dispose
 */
GPointerLockControls.prototype.dispose = function() {
  var self = this;
  
  self.enabled = false;
  document.removeEventListener('mousemove', self._onMouseMove.bind(self), false);
  document.removeEventListener('keydown', self._onKeyDown.bind(self), false);
  document.removeEventListener('keyup', self._onKeyUp.bind(self), false);
};

/**
 * Sets the gravity of the controls (used internally)
 * #setGravity
 * @param {object} gravity
 */
GPointerLockControls.prototype.setGravity = function(gravity) {
  var self = this;

  if(self.canShift) {
    var yaw = 0;
    if(self.gravity) {
      yaw = self.yawObject.rotation[self.gravity.gravity.axis];
    }

    self.gravity = gravity;

    self.yawObject.rotation.set(0, 0, 0);
    self.pitchObject.rotation.set(0, 0, 0);

    //self.yawObject.rotation.z =
    //  self.gravity.rotation;

    self.yawObject.rotation[self.gravity.gravity.axis] = yaw;

    var vec = new THREE.Vector3(0, 0, 0);
    vec[self.gravity.gravity.axis] = self.gravity.gravity.mult;
    self.raycaster = new THREE.Raycaster(new THREE.Vector3(0, 0, 0), vec);

    self.turning = true;
  }

  self.canShift = false;
  self.emitGravityEvent();
};

/**
 * Registers a new listener to receive gravity updates
 * #addGravityListener
 * @param {function} listener
 */
GPointerLockControls.prototype.addGravityListener = function(listener) {
  var self = this;

  self.gListeners.push(listener);
};

/**
 * Emits a gravity event to all registered listeners
 * #emitGravityEvent
 */
GPointerLockControls.prototype.emitGravityEvent = function() {
  var self = this;

  var event = {
    gravity: self.gravity,
    active: !self.canShift
  };

  self.gListeners.forEach(function(listener) {
    listener(event);
  });
};

/**
 * Registers a new listener to receive direction updates
 * #addDirectionListener
 * @param {function} listener
 */
GPointerLockControls.prototype.addDirectionListener = function(listener) {
  var self = this;

  self.dListeners.push(listener);
};

/**
 * Emits a gravity event to all registered listeners
 * #emitGravityEvent
 */
GPointerLockControls.prototype.emitDirectionEvent = function() {
  var self = this;

  var event = {
    direction: self.getDirection(new THREE.Vector3())
  };

  self.dListeners.forEach(function(listener) {
    listener(event);
  });
};

/**
 * Defines the mouse move functionality of the controls
 * #_onMouseMove
 * @param {object} event
 */
GPointerLockControls.prototype._onMouseMove = function(event) {
  var self = this;

  if (!self.enabled) {
    return;
  }

	var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
  var PI_2 = Math.PI / 2;

	self.yawObject.rotation[self.gravity.gravity.axis] +=
    self.gravity.stride.left *  movementX * 0.002;
	self.pitchObject.rotation.x -= movementY * 0.002;

	self.pitchObject.rotation.x =
    Math.max(-PI_2, Math.min(PI_2, self.pitchObject.rotation.x));

  self.emitDirectionEvent();
};

/**
 * Defines the key down functionality of the controls
 * #_onKeyDown
 * @param {object} event
 */
GPointerLockControls.prototype._onKeyDown = function(event) {
  var self = this;

  switch(event.keyCode) {
    case 87: // w
      if(!self.forward.disable) {
        self.forward.move = true;
      }

			break;
		case 65: // a
      if(!self.left.disable) {
        self.left.move = true;
      }

      break;
		case 83: // s
      if(!self.backward.disable) {
        self.backward.move = true;
      }

			break;
		case 68: // d
      if(!self.right.disable) {
        self.right.move = true;
      }

			break;
    case 32: // space
      if(self.canJump) {
        self.velocity.y = 300;
        self.canJump = false;
      }

      break;
    /*case 37: //left
      self.setGravity(Gravity.LEFT);
      break;
    case 38: // up
      self.setGravity(Gravity.UP);
      break;
    case 39: // right
      self.setGravity(Gravity.RIGHT);
      break;
    case 40: // down
      self.setGravity(Gravity.DOWN);
      break;*/
  }
};

/**
 * Defines the key up functionality of the controls
 * #_onKeyUp
 * @param {object} event
 */
GPointerLockControls.prototype._onKeyUp = function(event) {
  var self = this;

  switch(event.keyCode) {
    case 87: // w
			self.forward.move = false;
			break;
		case 65: // a
			self.left.move = false;
      break;
		case 83: // s
			self.backward.move = false;
			break;
		case 68: // d
			self.right.move = false;
			break;
  }
};
