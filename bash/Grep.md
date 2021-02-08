# Grep

## Find text in files

Find `npm.config.get` text in `lib/npm.js` file.

```bash
grep "npm.config.get" lib/npm.js
```


## Find text in all files under `lib`

```bash
grep "npm.config.get" lib/**/*.js
```

## Prettier the format

```bash
grep --color -n -C 1 "npm.config.get" lib/npm.js
```

So here:

```
--color: highlight the findings
-n: line number
-C 1: context 1 line top & bottom around the findings
```

## Regex support

Find both `npm.config.get` & `npm.config.set`

```bash
grep --color -n -e "npm.config.[gs]et" lib/npm.js
```

So here:

```
-e: regex
```