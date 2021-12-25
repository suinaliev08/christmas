const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint,
    Constraint = Matter.Constraint,
    Events = Matter.Events;

const WİDTH = window.innerWidth;
const HEİGHT = window.innerHeight;



const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: WİDTH,
        height: HEİGHT,
        wireframes: false,
    },
});
const runner = Runner.create();
const wallLeft = Bodies.rectangle(-15, HEİGHT / 2, 20, HEİGHT, {
    isStatic: true,
});

const wallRight = Bodies.rectangle(WİDTH + 15, HEİGHT / 2, 20, HEİGHT, {
    isStatic: true,
});
const wallTop = Bodies.rectangle(WİDTH / 2, -15, WİDTH, 20, {
    isStatic: true,
});

const wallBottom = Bodies.rectangle(WİDTH / 2, HEİGHT +10, WİDTH, 20, {
    isStatic: true,
});



const stack = Composites.stack(
    WİDTH - 250,
    HEİGHT / 5,
    3,
    1,
    0,
    0,
    function (x, y) {
        return Bodies.rectangle(x, y, 75, 75, {
            render: {
                sprite: {
                    texture: 'present.svg',
                    xScale: .8,
                    yScale:.8,
                },
            },
        });
    }
);

const stackTwo = Composites.stack(
 50, HEİGHT / 4,
    3,
    1,
    0,
    0,
    function (x, y) {
        return Bodies.rectangle(x, y, 75, 75, {
            render: {
                sprite: {
                    texture: 'present.svg',
                    xScale: .8,
                    yScale: .8,
                },
            },
        });
    }
);



const mouse = Mouse.create(render.canvas);
const mouseconstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: { render: { visible: false } },
});

render.mouse = mouse;


/*Events.on(engine,'afterUpdate',function(e){
      if (fire==true&&()) {
            
      }
})*/

Composite.add(engine.world, [
    wallLeft,
    wallRight,
    wallTop,
    wallBottom,
    stack,
    stackTwo,
    mouseconstraint,
]);

Runner.run(runner, engine);
Render.run(render);
