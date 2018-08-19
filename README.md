<h1 align="center">
  @divyanshu013/media 💃
  <br>
  <br>
  <a href="https://www.emojione.com/emoji/1f483">
    <img src="https://d3qhp42p4neron.cloudfront.net/3.1/png/512/1f483.png?Expires=1534538155&Signature=Qb9aSKSU-aU1ERBl2D0Kt1nqoVbXZ0Ko1OkCkbIr65j90XhmOvn2--bfuECao-Dr8seFtjnWz-FsNWLJXMRzjPqIJ9pnCJDnriXsa2DVIG11-y~cKoPkU3HLKQe4h~Qjm2Mnjb0IyA9o2AC3~NG4cT5ZZrW2JzW~9IQ1k7OFaPX6QU7I8oxHK~fWg1fPSX7o--sY9yrS7VjVfFnX6vcHzks3gjuyeUnZFGjNnwG3QtERMH1Kfjq3pSrHiJtyIdibdBZzJHkNqHMMVJDva966Ets~yVvXUN8velRI2FIwkXDe3n08x925T~5nP80S9qyp53Yol8ZfJLa5iW6gj98P3Q__&Key-Pair-Id=APKAIRGCVGOY7DOKYTJA" alt="@divyanshu013/media" title="@divyanshu013/media" width="300">
  </a>
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">Simplify media queries for CSS in JS</p>

![NpmVersion](https://img.shields.io/npm/v/@divyanshu013/media.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/@divyanshu013/media.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/9aff1f460c5e257f0519/maintainability)](https://codeclimate.com/github/divyanshu013/media/maintainability)
[![codecov](https://codecov.io/gh/divyanshu013/media/branch/master/graph/badge.svg)](https://codecov.io/gh/divyanshu013/media)
[![Build Status](https://travis-ci.org/divyanshu013/media.svg?branch=master)](https://travis-ci.org/divyanshu013/media)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)
![Downloads](https://img.shields.io/npm/dt/@divyanshu013/media.svg)

# Install

```bash
yarn add @divyanshu013/media
```

# Usage

## breakpoints

```js
import { breakpoints } from '@divyanshu013/media';

// default breakpoints
console.log(breakpoints);
/*
{
  xsmall: 420,
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
}
*/
```

## min-width query

```js
import { mediaMin } from '@divyanshu013/media';
import { css } from 'react-emotion';

const styles = css({
  [mediaMin.medium]: {
    fontSize: '1.2rem',
  },
});
```

## max-width query

```js
import { mediaMax } from '@divyanshu013/media';
import { css } from 'react-emotion';

const styles = css({
  [mediaMax.medium]: {
    fontSize: '0.9rem',
  },
});
```

## create

```js
import { create } from '@divyanshu013/media';

const breakpoints = {
  md: 768,
  xxl: 1600,
};

const mediaQMax = create(breakpoints, 'max');
const mediaQMin = create(breakpoints, 'min');
```

## compose

Just like `Object.assign`. (Actually its just Object.assign 😛).

```js
const media1 = {...};
const media2 = {...};

const mediaQ = compose(media1, media2);

// now use mediaQ
```

# Inspiration

This library is inspired by [emotion](https://github.com/emotion-js/emotion) and [facepaint](https://github.com/emotion-js/facepaint).

Logo from [EmojiOne](https://www.emojione.com/emoji/1f483).
