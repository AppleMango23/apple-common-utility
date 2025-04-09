📦 apple-common-utility

A simple React Native utility library for responsive design and common validations. This package provides helpful functions to handle screen scaling and object/string validation.

📲 Installation

```
npm install apple-common-utility
```

or

```
yarn add apple-common-utility
```

📐 Utility Functions
| Function | Description | Parameters | Returns |
|--------------------|-----------------------------------------------------------------------------|-------------------|-----------------|
| `responsiveWidth` | Scales a given width value based on the device’s screen width. | `width` (number) | Scaled width |
| `responsiveHeight` | Scales a given height value based on the device’s screen height. | `height` (number) | Scaled height |
| `normalize` | Scales font size or any size value according to screen density & size. | `size` (number) | Normalized size |
| `isStringEmpty` | Checks whether a string is null, undefined, or empty. | `str` (string) | `true` / `false`|
| `isObjectEmpty` | Checks whether an object is empty (no keys and is an actual object). | `obj` (object) | `true` / `false`|

📦 Example Usage

```
import {
  responsiveWidth,
  responsiveHeight,
  normalize,
  isStringEmpty,
  isObjectEmpty
} from 'apple-common-utility';

const buttonWidth = responsiveWidth(200);
const buttonHeight = responsiveHeight(50);
const fontSize = normalize(16);

console.log(isStringEmpty("")); // true
console.log(isObjectEmpty({})); // true
```

🧑‍💻 Author
Noah Yek

Let me know if you want badge
