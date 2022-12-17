enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    radius: 0;
}

let c: Square = {
        kind: ShapeKind.Square,
        radius: 0,
    }
;

console.log(c)