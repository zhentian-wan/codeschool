# File

## Viewing file

Viewing the whole file:

```bash
cat package.json
```

Viewing the whole file with line number

```bash
cat -n package.json
```

Viewing the file with pagination

```bash
less package.json
```

Highlight the search term, for example, we want to looking for `lodash` inside package.json, what we can do is:

```bash
less package.json
/lodash
```

Press `q` to exit the viewing.

## Open the file

```bash
open lib/npm.js
open lib/npm.js -a TextEdit ## when there is no default app accosiate with this file extension
```

## Write content to file

Create a new file

```bash
touch file.txt
echo 'hi' > file.txt
```

It write 'hi' into file.txt, but if we do

```bash
echo 'hello world' > file.txt
```

It overwrites the `hi`.

If you want to `append` content to the end of file:

```bash
echo "hi" >> file.txt
```

Now inside file we have:

```bash
hello world
hi
```

## Remove a file

```bash
rm file.txt
```

## Move a file

If you want to move `index.js` to a `src` folder:

```bash
mv index.js src/index.js
```

## Move all files from one dir to another dir

Move all the files under `lib` folder to `src` folder

```bash
mv lib/* src/
```

Move all the nested folder and files from `lib` to `src`:

```bash
cp -R lib/* src/
```

## Copy file

Copy `README.mnd` to `src` folder:

```bash
cp README.md src/README.md
```

## Rename a file

Rename `index.js` file to `a.js`:

```bash
mv index.js a.js
```

## Find files in folder

Find all `png` files under `images` folder

```bash
find images/ -name "*.png"
```

It is case sensitive, to ignore case, need to add `-i`:

```bash
find images/ -iname "*.png"
```


### Find and delete files

Find all javascript files under `dist` folder and delete those:

```bash
find dist/ -name "*.js" -delete
```

### Find files and run cmd against files

Add `-exec` flag and following with `commands`.

```bash
find images/ -name "*.ng" -exec pngquant {} \
```