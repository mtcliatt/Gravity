var start = [{
  x: 200,
  y: -100,
  z: 200
}, {
  x: 200,
  y: -100,
  z: 200
}, {
  x: -200,
  y: -200,
  z: 200
}, {
  x: -250,
  y: -350,
  z: -350
}, {
  x: 350,
  y: -450,
  z: 350
}, {
  x: -100,
  y: 100,
  z: 450
}];

var end = [{
  x: -200,
  y: -125,
  z: -200
}, {
  x: -200,
  y: -125,
  z: 200
}, {
  x: -200,
  y: -225,
  z: -200
}, {
  x: 50,
  y: 280,
  z: 450
}, {
  x: -350,
  y: -75,
  z: 0
}, {
  x: -100,
  y: 70,
  z: -450
}];

var levelSizes = [
  {
    width: 500,
    height: 500,
    depth: 500
  },
  {
    width: 500,
    height: 500,
    depth: 500
  },
  {
    width: 500,
    height: 500,
    depth: 500
  },
  {
    width: 600,
    height: 800,
    depth: 1000
  },
  {
    width: 1000,
    height: 1000,
    depth: 1000
  },
  {
    width: 300,
    height: 700,
    depth: 1000
  }
];

var objsPlatforms = [

  //level 1
  [{
    x: -200,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -100,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 100,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -200,
    y: -200,
    z: -200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: 200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: 200,
    z: 100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: 200,
    z: 0,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: 200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: 200,
    z: -200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }],


  //level 2
  [{
    x: -200,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -200,
    y: -200,
    z: -200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: -200,
    z: -200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: -200,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 125,
    y: -215,
    z: 225,
    width: 50,
    height: 70,
    depth: 50,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 125,
    y: -232,
    z: 175,
    width: 50,
    height: 36,
    depth: 50,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: -200,
    z: 100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: -100,
    maxZ: 100,
    xdir: 0,
    ydir: 0,
    zdir: 1,
    speed: 0.5
  }, {
    x: 100,
    y: -200,
    z: -200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: -100,
    maxX: 100,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 1,
    ydir: 0,
    zdir: 0,
    speed: 0.75
  }, {
    x: -200,
    y: -200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: -100,
    maxZ: 100,
    xdir: 0,
    ydir: 0,
    zdir: -1,
    speed: 1
  }],




  //level 3
  [{
    x: -200,
    y: -200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -100,
    y: -200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: -200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 100,
    y: -200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: -200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: -100,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: 0,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: 100,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 200,
    y: 200,
    z: -100,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: 0,
    y: -100,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -100,
    y: 0,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -100,
    y: 100,
    z: 200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 100,
    maxY: 200,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: -1,
    zdir: 0,
    speed: 0.5
  }, {
    x: -100,
    y: 200,
    z: 0,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: -100,
    maxZ: 100,
    xdir: 0,
    ydir: 0,
    zdir: 1,
    speed: 0.5
  }, {
    x: -100,
    y: 200,
    z: -200,
    width: 100,
    height: 100,
    depth: 100,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -85,
    y: -65,
    z: 225,
    width: 70,
    height: 30,
    depth: 50,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }, {
    x: -68,
    y: -95,
    z: 225,
    width: 36,
    height: 30,
    depth: 50,
    texture: 0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    xdir: 0,
    ydir: 0,
    zdir: 0,
    speed: 0
  }],

  //level 4
  [
    {
      x: 0,
      y: 350,
      z: -450,
      width: 600,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 250,
      y: -250,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 50,
      y: 50,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -150,
      y: 50,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 50,
      y: 50,
      z: 350,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: -350,
      maxZ: 450,
      xdir: 0,
      ydir: 0,
      zdir: 1,
      speed: 0.75
    },
    {
      x: -150,
      y: 50,
      z: -250,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: -350,
      maxZ: 450,
      xdir: 0,
      ydir: 0,
      zdir: 1,
      speed: 0.75
    },
    {
      x: 50,
      y: 350,
      z: 450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 50,
      y: 150,
      z: -150,
      width: 30,
      height: 100,
      depth: 200,
      texture: 0,
      minX: -200,
      maxX: 100,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 1,
      ydir: 0,
      zdir: 0,
      speed: 0.6
    },
    {
      x: -50,
      y: 150,
      z: 150,
      width: 30,
      height: 100,
      depth: 200,
      texture: 0,
      minX: -200,
      maxX: 100,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: -1,
      ydir: 0,
      zdir: 0,
      speed: 0.7
    }
  ],

  //level 5
  [
    {
      x: 450,
      y: -450,
      z: 450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 450,
      y: -450,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 450,
      y: -475,
      z: -375,
      width: 100,
      height: 50,
      depth: 50,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 450,
      y: -475,
      z: 375,
      width: 100,
      height: 50,
      depth: 50,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -450,
      y: -350,
      z: 450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -350,
      y: -150,
      z: 0,
      width: 100,
      height: 100,
      depth: 1000,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -350,
      y: -450,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -450,
      y: -350,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 0,
      y: -350,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 450,
      y: -250,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 450,
      y: 150,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -450,
      y: 50,
      z: -450,
      width: 100,
      height: 100,
      depth: 100,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
  ],

  //level 6
  [
    {
      x: -100,
      y: 0,
      z: 350,
      width: 100,
      height: 100,
      depth: 300,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -100,
      y: 200,
      z: 0,
      width: 100,
      height: 100,
      depth: 400,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -100,
      y: 0,
      z: -350,
      width: 100,
      height: 100,
      depth: 300,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 100,
      y: 0,
      z: 0,
      width: 100,
      height: 100,
      depth: 1000,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 0,
      y: 0,
      z: 0,
      width: 90,
      height: 100,
      depth: 200,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: -400,
      maxZ: 400,
      xdir: 0,
      ydir: 0,
      zdir: 1,
      speed: 0.6
    },
    {
      x: 0,
      y: 200,
      z: 0,
      width: 90,
      height: 100,
      depth: 200,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: -400,
      maxZ: 400,
      xdir: 0,
      ydir: 0,
      zdir: 1,
      speed: 0.6
    },
    {
      x: -50,
      y: 100,
      z: 200,
      width: 200,
      height: 300,
      depth: 20,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: -50,
      y: 100,
      z: -200,
      width: 200,
      height: 300,
      depth: 20,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    },
    {
      x: 50,
      y: 100,
      z: 0,
      width: 200,
      height: 300,
      depth: 20,
      texture: 0,
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      minZ: 0,
      maxZ: 0,
      xdir: 0,
      ydir: 0,
      zdir: 0,
      speed: 0
    }
  ]
];

var objsSwitches = [
  [{
    x: -200,
    y: -145,
    z: 200,
    g: Gravity.UP
  }, {
    x: 200,
    y: -245,
    z: -200,
    g: Gravity.UP
  }, {
    x: 200,
    y: 245,
    z: 200,
    g: Gravity.DOWN
  }, {
    x: -200,
    y: 245,
    z: -200,
    g: Gravity.DOWN
  }],

  [

  ],

  [{
    x: 0,
    y: -245,
    z: 200,
    g: Gravity.UP
  }, {
    x: -100,
    y: -55,
    z: 180,
    g: Gravity.RIGHT
  }, {
    x: 245,
    y: 0,
    z: -200,
    g: Gravity.DOWN
  }, {
    x: 245,
    y: 200,
    z: 200,
    g: Gravity.DOWN
  }],

  [{
    x: -250,
    y: -395,
    z: -450,
    g: Gravity.UP
  }, {
    x: -150,
    y: 295,
    z: -450,
    g: Gravity.DOWN
  }, {
    x: 50,
    y: 295,
    z: -450,
    g: Gravity.DOWN
  }, {
    x: 250,
    y: 295,
    z: -450,
    g: Gravity.DOWN
  }, {
    x: 50,
    y: 120,
    z: 495,
    g: Gravity.UP
  }, {
    x: 250,
    y: -180,
    z: -495,
    g: Gravity.DOWN
  }, {
    x: -50,
    y: 395,
    z: 450,
    g: Gravity.DOWN
  }, {
    x: -50,
    y: 395,
    z: -350,
    g: Gravity.DOWN
  }],

  [{
    x: 495,
    y: -380,
    z: 450,
    g: Gravity.LEFT
  }, {
    x: 450,
    y: -395,
    z: -450,
    g: Gravity.UP
  }, {
    x: 450,
    y: 495,
    z: 0,
    g: Gravity.DOWN
  }, {
    x: -395,
    y: -350,
    z: 450,
    g: Gravity.UP
  }, {
    x: -350,
    y: -205,
    z: -450,
    g: Gravity.DOWN
  }, {
    x: -395,
    y: -380,
    z: -450,
    g: Gravity.RIGHT
  }, {
    x: -55,
    y: -350,
    z: -450,
    g: Gravity.DOWN
  }, {
    x: 495,
    y: 50,
    z: -450,
    g: Gravity.LEFT
  }, {
    x: -395,
    y: 50,
    z: -450,
    g: Gravity.DOWN
  }, {
    x: -495,
    y: -470,
    z: 0,
    g: Gravity.DOWN
  }, {
    x: 495,
    y: -470,
    z: 0,
    g: Gravity.DOWN
  }],

  [{
    x: 0,
    y: 60,
    z: 15,
    g: Gravity.UP
  }, {
    x: 0,
    y: 140,
    z: -185,
    g: Gravity.DOWN
  }, {
    x: 0,
    y: -345,
    z: 450,
    g: Gravity.UP
  }, {
    x: -100,
    y: 345,
    z: 450,
    g: Gravity.DOWN
  }]
];
