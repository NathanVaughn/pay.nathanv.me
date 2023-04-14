# pay.nathanv.me

My payment website.

## Installation

```bash
npm install
```

## Building

```bash
npm run build
```

This will place all site files in the `public` folder.

## Development

```bash
npm run server
```

## Editing

For each payment method, create a folder in the `content` directory.
Create a `_index.md` file with the following header information:

```yaml
title: "Name"
logo: "name_logo.png"
QRCode: "name_qr.png"
profileURL: "https://example.com"
```

Cryptocurrencies can use the following instead of `profileURL`:

```yaml
addressPrefix: "LTC"
address: "address goes here"
```

A `weight` can also be added to sort the payment methods.
`draft: true` can be added to hide it on the rendered page.
