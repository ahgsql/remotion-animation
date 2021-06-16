# Remotion Animation

Use Css Keyframes and Animations from animate.css in remotion.

![npm bundle size](https://img.shields.io/bundlephobia/min/remotion-animation) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/remotion-animation) [![npm downloads](https://img.shields.io/npm/dt/remotion-keyframes)](https://www.npmjs.com/package/remotion-animation) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

## CSS Keyframes

## Install

```bash
npm install  remotion-animation
```

or

```bash
yarn add remotion-animation
```

## Usage

### With Your Keyframes

Use Animation component from library and pass required props.

#### Props

- **duration**: Pass integer value to determine animation duration. **(sequence length by default if not passed)**
- **From** and **To** props: Use from and to props to create 2 step animation. Pass any style inside.
- To use percentage animations use **f0**, **f15**,.. **f100.** This will produce **%0, %15, %100** in keyframes.

```jsx
import {Animation} from  'remotion-animation';

//From / To usage
<Animation duration="2" from={{opacity:"1"}} to={{opacity:"0.1"}} >
	<span style={{fontSize:"10rem"}}> Remotion is Awesome! </span>
</Animation>

//Percentage Usage, you can use all numbers between 0 and 100 with "f" prefix
<Animation duration="2" f0={{opacity:"1"}} f40={{opacity:"0.3"}} f100={{opacity:"0.9"}} >
	<span style={{fontSize:"10rem"}}> Really! </span>
</Animation>
```

### With Animate.CSS Library

[Animate.CSS](https://github.com/animate-css/animate.css) is a cross-browser library of CSS animations. As easy to use as an easy thing.
You can take advantage of this library and use pre-made animations with animate.css

**First install animate.css library by**

```bash
npm install animate.css --save
```

or

```bash
yarn add animate.css
```

**Then import both library**

```jsx
import { Animation } from "remotion-animation";
import "animate.css";
```

#### Props

- **duration** : Pass integer value to determine animation duration. **(sequence length by default if not passed)**
- **animationName**: name of animation from animate.css

```jsx
import { Animation } from "remotion-animation";
import "animate.css";

<Animation duration="2" animateName="bounceIn">
  <span style={{ fontSize: "10rem" }}> I am Bouncing! </span>
</Animation>;
```

You can use another animation frameworks if they provide animations name directly
## License

MIT © [ahgsql](https://github.com/ahgsql)
