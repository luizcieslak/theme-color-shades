# Theme Color Shades

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/theme-color-shades.svg)](https://npmjs.org/package/theme-color-shades)
[![Downloads/week](https://img.shields.io/npm/dw/theme-color-shades.svg)](https://npmjs.org/package/theme-color-shades)
[![License](https://img.shields.io/npm/l/theme-color-shades.svg)](https://github.com/luizcieslak/https://github.com/luizcieslak/theme-color-shades/blob/master/package.json)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

CLI command to create a group of color shades ready to be used in your UI library.

<center>
  <img width="600" src="https://imgur.com/VnCtTDZ.gif">
</center>

## Usage

```sh
npx theme-color-shades a12345 # or any 6-digit hex color to serve as reference.

# To output as an array
npx theme-color-shades a12345 --format array
```

You can also choose them in [themecolorshades.com](https://themecolorshades.com) and see how it displays in UI examples or to change the factors used in the algorithm.

## Integration

- [Rebass](https://rebassjs.org/theming)
- [Chakra UI](https://chakra-ui.com/theme)
- [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors/#app)

## Rationale

This work is heavily based on [Refactoring UI](https://refactoringui.com) book.

When you choose a color to your application, you probably going to need a lighter or darker version of it to use in a background or text, for example.

Usually, a set of shades has 10 elements, going from 50 to 900, being 900 the darkest one:

<center>
  <img width="400" src="https://imgur.com/smgUYp4.png">
</center>

```js
{
  "50": "#fce8f0",
  "100": "#f5bcd1",
  "200": "#eb93b0",
  "300": "#dc6f90",
  "400": "#cf496d",
  "500": "#b63054",
  "600": "#90233d",
  "700": "#6c1426",
  "800": "#430a14",
  "900": "#170306"
}
```

Converting the color to HSL format, from `#a12345` to `hsl(344, 64%, 38%)`, the algorigthm changes these 3 elements:

- **Lightness**: Goes from 5 to 95%.
- **Hue**: By starting in the middle of the set, rotate towards the nearest light hue in the color wheel for the 50-400 shades and rotate to the nearest dark hue for the 500-900 shades.
- **Saturation**: Raise the saturation in the edges, decrease it in the center.

### "The color choosing process should not be done by math"

Yes, of course. This process above may not work for all colors or may not give the expected result. However, for non-designers, picking a full shade may be a difficult task and Theme Color Shades aims to speed up it and give a solid set of shades that can always be changed.

To mitigate this, in the website, you can change the default multiplying factors to Hue and Saturation that generate the shades :)

If you want to propose a change to this process, feel free to open an issue or a pull request.

## Related Work

- [Color Shades Generator for Tailwind CSS](https://javisperez.github.io/tailwindcolorshades/#/)
- [Coolors](https://coolors.co/)
