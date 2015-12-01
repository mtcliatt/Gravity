
'use strict';

/**
 * Creates an instance of Level
 * @constructor
 * @param {object} scene
 * @param {object} camera
 */

function Platform(platform) {
    var self = this;

    self.object = platform.object;

    self.x = platform.x;
    self.y = platform.y;
    self.z = platform.z;

    self.minX = platform.minX;
    self.maxX = platform.maxX;

    self.minY = platform.minY;
    self.maxY = platform.maxY;

    self.minZ = platform.minZ;
    self.maxZ = platform.maxZ;

    self.speed = platform.speed;

    self.xdir = platform.xdir;
    self.ydir = platform.ydir;
    self.zdir = platform.zdir;

    self.object.position.x = self.x;
    self.object.position.y = self.y;
    self.object.position.z = self.z;
}

Platform.prototype._update = function() {
    var self = this;

    var pos = self.object.position;

    if ( pos.x <= self.minX || pos.x >= self.maxX ) {
        self.xdir = self.xdir * -1; // Flip the sign bit.
    }
    self.object.position.x += self.speed * self.xdir;

    if ( pos.y <= self.minY || pos.y >= self.maxY ) {
        self.ydir = self.ydir * -1; // Flip the sign bit.
    }
    self.object.position.y += self.speed * self.ydir;

    if ( pos.z <= self.minZ || pos.z >= self.maxZ ) {
        self.zdir = self.zdir * -1; // Flip the sign bit.
    }
    self.object.position.z += self.speed * self.zdir;
}

function Level(scene, camera, level) {
  var self = this;

  self.scene = scene;
  self.lockCamera = camera;
  self.eListeners = [];

  self.level = level;

  self.controls = new GPointerLockControls(camera, Gravity.DOWN, null);

  self.scene.add(self.controls.getObject());

  var me = self.controls.getObject().position;
  me.x = start[self.level].x;
  me.y = start[self.level].y;
  me.z = start[self.level].z;

  self.end = end[self.level];

  self._initScene();

  document.addEventListener('keydown', self._onKeyDown.bind(self), false);
}

/**
 * Initializes the scene by creating all elements
 * #_initScene
 */
Level.prototype._initScene = function() {
  var self = this;

  self.boundingBox = self._boundingBox();
  self.scene.add(self.boundingBox);

  self.endingPoint = self._endingPoint();
  //self.scene.add(self.endingPoint);

  self.objects = self._generateObjects();
  self.objects.map(self.scene.add.bind(self.scene));
}

/**
 * Creates the overall bounding box for the Level
 * #_boundingBox
 * @returns {object}
 */
Level.prototype._boundingBox = function() {
  var geometry = new THREE.BoxGeometry(500, 500, 500);
  var material = new THREE.MeshPhongMaterial({
    color: 0x000000,
    side: THREE.DoubleSide,
    specular: 0xffffff,
    shininess: 50
  });

  return new THREE.Mesh(geometry, material);
};

/**
 * Creates the ending point for the Level
 * #_endingPoint
 * @returns {object}
 */
Level.prototype._endingPoint = function() {
  var self = this;
  var geometry = new THREE.SphereGeometry(10, 32, 32);
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });

  var mesh = new THREE.Mesh(geometry, material);
  var light = new THREE.PointLight(0xffffff, 2, 50);
  light.position.set(end[self.level].x, end[self.level].y, end[self.level].z);
  light.add(mesh);
  self.scene.add(light);

  return mesh;
};

/**
 * Generates all objects for the Level
 * #_generateObjects
 * @returns {array}
 */
Level.prototype._generateObjects = function() {
  var self = this;

  var objects = [];

  objects = objects.concat(self._generatePlatforms());
  objects = objects.concat(self._generateSwitches());

  return objects;
};

/**
 * Generates all regular platform objects for the Level
 * #_generatePlatforms
 * returns {array}
 */
 Level.prototype._generatePlatforms = function() {
   var self = this;

   self.movers = [];
   self.platforms = [];

   var loader = new THREE.TextureLoader();
   var textures = [];
   textures[0] = loader.load('ftex.jpg');

   var obj = objsPlatforms[self.level];

   for(var i = 0; i < obj.length; i++) {
     var geometry = new THREE.BoxGeometry(obj[i].width, obj[i].height, obj[i].depth);
     var material = new THREE.MeshPhongMaterial({
       map: textures[obj[i].texture],
       specular: 0xffffff,
       shininess: 50
     });
     var mesh = new THREE.Mesh(geometry, material);

     var platform = {};
     platform.object = mesh;

     platform.x = obj[i].x;
     platform.y = obj[i].y;
     platform.z = obj[i].z;

     platform.minX = obj[i].minX;
     platform.maxX = obj[i].maxX;
     platform.minY = obj[i].minY;
     platform.maxY = obj[i].maxY;
     platform.minZ = obj[i].minZ;
     platform.maxZ = obj[i].maxZ;

     platform.xdir = obj[i].xdir;
     platform.ydir = obj[i].ydir;
     platform.zdir = obj[i].zdir;

     platform.speed = obj[i].speed;

     platform = new Platform(platform);

     self.platforms.push(platform.object);
     self.movers.push(platform);
   }

   return self.platforms;
 };

/**
 * Generates all switch objects for the Level
 * #_generateSwitches
 * @returns {array}
 */
Level.prototype._generateSwitches = function() {
  var self = this;

  self.switches = [];
  var loader = new THREE.TextureLoader();

  var obj = objsSwitches[self.level];

  var texArrow = loader.load('arrow.jpg');
  var texCrate = loader.load('crate.jpg');

  for(var i = 0; i < obj.length; i++) {
    var crateMaterial = new THREE.MeshBasicMaterial({
      map: texCrate
    });

    var arrowMaterial = new THREE.MeshBasicMaterial({
      map: texArrow
    });

    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshFaceMaterial([
      crateMaterial, crateMaterial, crateMaterial, crateMaterial, crateMaterial,
      arrowMaterial
    ]);

    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = obj[i].x;
    mesh.position.y = obj[i].y;
    mesh.position.z = obj[i].z;
    mesh.rotation.z = obj[i].g.cubeRotation;

    mesh.gravity = obj[i].g;

    self.switches.push(mesh);
  }

  return self.switches;
};

/**
 * Updates Level
 * #update
 */
Level.prototype.update = function() {
  var self = this;

  self._updateSwitches();
  self._updatePlatforms();
  self._updateEnd();
};

Level.prototype._updatePlatforms = function() {
    var self = this;

    for (var i = 0; i < self.movers.length; i++) {
        self.movers[i]._update();
    }
}

/**
 * Updates properties of all switches
 * #_updateSwitches
 */
Level.prototype._updateSwitches = function() {
  var self = this;

  self.switches.forEach(function(s) {
    s.material.materials.forEach(function(m) {
      m.color.setHex(0xffffff);
    });
  });

  var raycaster = new THREE.Raycaster(self.controls.getObject().position,
                                      self.controls.getDirection(new THREE.Vector3()),
                                      0, 30);

  var intersects = raycaster.intersectObjects(self.switches);

  if(intersects.length) {
    var material = intersects[0].object.material;
    self.gravity = intersects[0].object.gravity;

    material.materials.forEach(function(m) {
      m.color.setHex(0xadd8e6);
    });
  } else {
    self.gravity = null;
  }
};

/**
 * Updates to determine if the end has been reached
 * #_updateEnd
 */
Level.prototype._updateEnd = function() {
  var self = this;

  var view = self.controls.getDirection(new THREE.Vector3());
  view[self.controls.gravity.gravity.axis] = 0;

  var intersects = 0;
  for(var i = 0; i < 8; i++) {
    view.applyEuler(new THREE.Euler(0, Math.PI / 4, 0));
    var raycaster = new THREE.Raycaster(self.controls.getObject().position,
                                      view, 0, 10);
    intersects += raycaster.intersectObjects([self.endingPoint]).length;
  }

  if(intersects) {
    self.end = true;
    self.controls.dispose();
    self.emitEndEvent();
  }
};

/**
 * Register a new listener to receive end updates
 * #addEndListener
 * @param {function} listener
 */
Level.prototype.addEndListener = function(listener) {
  var self = this;

  alert('all done');
  self.eListeners.push(listener);
};

Level.prototype.emitEndEvent = function() {
  var self = this;

  self.eListeners.forEach(function(listener) {
    listener();
  });
};

/**
 * Returns the controls for the Level
 * @returns {object}
 */
Level.prototype.getControls = function() {
  var self = this;

  return self.controls;
};

/**
 * Provides behavior to be performed on key down for the Level
 * #_onKeyDown
 * @param {object} event
 */
Level.prototype._onKeyDown = function(event) {
  var self = this;

  if(event.keyCode >= 37 && event.keyCode <= 40 && self.gravity) {
    self.controls.setGravity(self.gravity);
    self.gravity = null;
  }
};

Level.prototype.getStatus = function() {
    var self = this;


}
