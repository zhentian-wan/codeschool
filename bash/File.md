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

