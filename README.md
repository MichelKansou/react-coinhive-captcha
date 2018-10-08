# React Coinhive Captcha
React Component for coinhive captcha, mine cryptocurrency when you want to verify your users are not bots. 

This uses [Coin-Hive](https://coin-hive.com/) to mine [Monero (XMR)](https://getmonero.org/).

## Installation

```
npm install --save react-coinhive-captcha
```

## Usage

```jsx
// Anywhere in your app as long as it gets mounted
<CoinhiveCaptcha siteKey='EiQYufg9i1OKaZ8mSoSZrjui9ahcbfjG' onComplete={() => console.log('mining completed')} />
```

## Props

- `siteKey`: Your [Coin-Hive Site Key](https://coin-hive.com/settings/sites).

- `userName`: If used, the miner will be created with `CoinHive.User(siteKey, userName)`. By default the miner is created with `CoinHive.Anonymous(siteKey)`.

- `threads`: The number of threads the miner should start with. Default is `2`.

- `maxHash`: The number of maximum hash the miner should mine. Default is `1024`.

- `throttle`: The fraction of time that threads should be idle. Default is `0`.

- `onComplete`: A function that is called when the `miner` instance is completed.

## Disclaimer

I have nothing to do with `coin-hive.com`
