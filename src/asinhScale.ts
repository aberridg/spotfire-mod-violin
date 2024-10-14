/*
* Copyright © 2024. Cloud Software Group, Inc.
* This file is subject to the license terms contained
* in the license file that is distributed with this file.
*/

import { ticks } from "d3-array";
// @ts-ignore
import { linearish } from "../node_modules/d3-scale/src/linear.js";
// @ts-ignore
import { copy, transformer } from "../node_modules/d3-scale/src/continuous.js";
// @ts-ignore
import { initRange } from "../node_modules/d3-scale/src/init.js";
<<<<<<< HEAD

import { LOG_CATEGORIES, Log } from "./index";
=======
// @ts-ignore
import { LOG_CATEGORIES, Log } from "./log";
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f

// linearPortion is a small linear portion of the scale, for when x crosses zero;
function transformSymlog(linearPortion:number) {
  return function (x: number) {
    return Math.asinh(x / linearPortion);
  };
}

function transformSymexp(linearPortion: number) {
  return function (x: number) {
    return Math.sinh(x) * linearPortion;
  };
}

export function asinhish(transform: any) {
  var linearPortion = 1,
    scale = transform(transformSymlog(linearPortion), transformSymexp(linearPortion));

  scale.linearPortion = function (_ : any) {
    return arguments.length
      ? transform(transformSymlog((linearPortion = +_)), transformSymexp(linearPortion))
      : linearPortion;
  };

  return linearish(scale);
}

export function scaleAsinh() {
  var scale = asinhish(transformer());

  scale.copy = function () {
    return copy(scale, scaleAsinh()).linearPortion(scale.linearPortion());
  };

  const base = 10;
  scale.ticks = (count: number) => {
    //Log.green(LOG_CATEGORIES.AsinhScale)("count", count);
    const d = scale.domain();
    Log.green(LOG_CATEGORIES.AsinhScale)("domain", d.map((t:any) => t.toExponential(2)));
    let min = d[0];
    let max = d[d.length - 1];
    const r = max < min;

    // Ensure that min or max is never exactly 0
    if (min == 0) {
      min = 0.0000000000000001;
    }
    if (max == 0) {
      max = 0.0000000000000001;
    }
    let powMin = Math.log10(Math.abs(min));
    let powMax = Math.log10(Math.abs(max));
    let k;
    let t;
    const n = count == null ? 10 : +count;
    let z = [];

    // Make sure we cover the max and min
    z.push(min);
    z.push(max);

    Log.green(LOG_CATEGORIES.AsinhScale)("n, r, min, max", n, r, min, max);

    (powMin = Math.floor(powMin)), (powMax = Math.ceil(powMax));

    Log.green(LOG_CATEGORIES.AsinhScale)(
      "powMin, powMax",
      powMin,
      powMax,
      powMax - powMin,
      !(base % 1) && powMax - powMin < n
    );

    Log.green(LOG_CATEGORIES.AsinhScale)("small");

    if (powMin < 0) {
      // powers < 0
      for (let i = powMin; i <= 0; ++i) {
        for (k = 0; k > -base; --k) {
          t = -1 * k * Math.pow(base, i);
<<<<<<< HEAD
          Log.green(LOG_CATEGORIES.AsinhScale)(
=======
          /*Log.green(LOG_CATEGORIES.AsinhScale)(
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
            "i, k, t",
            i,
            k,
            t.toExponential(2),
            !z.includes(t) && t < min,
            t < min
<<<<<<< HEAD
          );
          if (t < min) continue;
          if (t > max) break;
          if (!z.includes(t)) {
            Log.green(LOG_CATEGORIES.AsinhScale)("pushing", t.toExponential(2));
=======
          );*/
          if (t < min) continue;
          if (t > max) break;
          if (!z.includes(t)) {
            //Log.green(LOG_CATEGORIES.AsinhScale)("pushing", t.toExponential(2));
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
            z.push(t);
          }
        }
      }
      Log.green(LOG_CATEGORIES.AsinhScale)("small neg");
      // powers < 0
      for (let i = powMin; i <= 0; ++i) {
        for (k = 0; k > -base; --k) {
          t = k * Math.pow(base, i);
<<<<<<< HEAD
          Log.green(LOG_CATEGORIES.AsinhScale)(
=======
          /*Log.green(LOG_CATEGORIES.AsinhScale)(
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
            "i, k, t",
            i,
            k,
            t.toExponential(2),
            !z.includes(t) && t < min,
            t < min
<<<<<<< HEAD
          );
          if (t < min) continue;
          if (t > max) break;
          if (!z.includes(t)) {
            Log.green(LOG_CATEGORIES.AsinhScale)("pushing", t.toExponential(2));
=======
          );*/
          if (t < min) continue;
          if (t > max) break;
          if (!z.includes(t)) {
            //Log.green(LOG_CATEGORIES.AsinhScale)("pushing", t.toExponential(2));
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
            z.push(t);
          }
        }
      }
    }

<<<<<<< HEAD
    Log.green(LOG_CATEGORIES.AsinhScale)("negative");
=======
    //Log.green(LOG_CATEGORIES.AsinhScale)("negative");
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
    // Negative values
    for (let i = 0; i < powMin; ++i) {
      for (k = 0; k < base; ++k) {
        t = -1 * k * Math.pow(base, i);
<<<<<<< HEAD
        Log.green(LOG_CATEGORIES.AsinhScale)(
=======
        /*Log.green(LOG_CATEGORIES.AsinhScale)(
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
          "i, k, t",
          i,
          k,
          t.toExponential(2),
          !z.includes(t) && t < min,
          t < min
<<<<<<< HEAD
        );
=======
        );*/
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
        //if (t < min) continue;
        if (t > max) break;
        if (!z.includes(t)) {
          //Log.green(LOG_CATEGORIES.AsinhScale)("pushing");
          z.push(t);
        }
      }
    }
<<<<<<< HEAD
    Log.green(LOG_CATEGORIES.AsinhScale)("positive");
=======
    //Log.green(LOG_CATEGORIES.AsinhScale)("positive");
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
    // Positive values
    for (let i = 0; i < powMax; i++) {
      for (k = 0; k < base; ++k) {
        t = k * Math.pow(base, i);
<<<<<<< HEAD
        Log.green(LOG_CATEGORIES.AsinhScale)(
=======
        /*Log.green(LOG_CATEGORIES.AsinhScale)(
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
          "i, k, t",
          i,
          k,
          t.toExponential(2),
          !z.includes(t) && t < min
<<<<<<< HEAD
        );
        if (t < min) continue;
        if (t > max) break;
        if (!z.includes(t)) {
          Log.green(LOG_CATEGORIES.AsinhScale)("pushing");
=======
        );*/
        if (t < min) continue;
        if (t > max) break;
        if (!z.includes(t)) {
          //Log.green(LOG_CATEGORIES.AsinhScale)("pushing");
>>>>>>> 7df09fe71b6c7cca30c104321bcf5cd7cc99ea5f
          z.push(t);
        }
      }
    }
    // Check under which conditions this occurs
    if (z.length * 2 < n) {
      Log.green(LOG_CATEGORIES.AsinhScale)("!!!WARNING: using fallback ticks mechanism!!!!");
      z = ticks(min, max, n);
    }
    z.sort((a, b) => a - b);

    Log.green(LOG_CATEGORIES.AsinhScale)(
      "ticks (z)",
      z.map((t) => t.toExponential(2))
    );

    return z;
  };

  return initRange.apply(scale, arguments);
}
