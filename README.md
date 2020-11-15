# Leaflet Rotated Marker

Enables rotation of marker icons in Leaflet. [Demo](https://abdulk1.github.io/Leaflet.RotatedMarker/)

[![npm version](https://badge.fury.io/js/leaflet-marker-rotation.svg)](https://www.npmjs.com/package/leaflet-marker-rotation)

```bash
npm install leaflet-marker-rotation
```

## Usage

```js
L.rotatedMarker([48.8631169, 2.3708919], {
  rotationAngle: 45,
}).addTo(map);

var marker = new L.RotatedMarker([48.8631169, 2.3708919], {
  rotationAngle: 145,
  rotationOrigin: "bottom center",
}).addTo(map);
```

## API

It extends the `L.Marker` class with two new options:

| Option               | Type     | Default           | Description                                                                                                                 |
| -------------------- | -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **`rotationAngle`**  | `Number` | 0                 | Rotation angle, in degrees, clockwise.                                                                                      |
| **`rotationOrigin`** | `String` | `'bottom center'` | The rotation center, as a [`transform-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin) CSS rule. |

and two new methods:

| Method                             | Returns | Description                     |
| ---------------------------------- | ------- | ------------------------------- |
| **`setRotationAngle(newAngle)`**   | `this`  | Sets the rotation angle value.  |
| **`setRotationOrigin(newOrigin)`** | `this`  | Sets the rotation origin value. |

The default `rotationOrigin` value will rotate around the bottom center point, corresponding to the "tip" of the marker for most commonly used icons. If your marker icon has no tip, or you want to rotate around its center, use `center center`.

## Note

It doesn't rotate marker icon shadows. There is no way to make it look good with the perspective of classic, pin type shadows.

It's advised to disable icon shadows, or use simple ones which will work for all marker angles.
