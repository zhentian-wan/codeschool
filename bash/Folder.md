# Folder

## Open folder

When you want to open a folder in Finder, for example your current folder:

```bash
open .
open .git ## you can open the hidden folder
```

## Create folder

Create a single folder

```bash
mkdir folder
```

You can also create nested folders

```bash
mdkir -p a/b/c
```

It will create a folder `c` inside folder `b` inside folder `a`.

## Remove folder

Note that the rm command permanently deletes a file. It doesn't move it to the trash or anything. If we want to remove a folder, we can't just use plain `rm`.

rm by default only removes files. If we pass the `-r`flag that will tell it to recursively remove the folder and everything in it.

Oftentimes, you'll see rm used with the `-r` flag and the `-f` flag. The `-f` flag is a sort of a nuclear option. It prevents Bash from prompting you for confirmation when you remove a file, as well as erroring out if a file or directory doesn't exist. If we do that on a, that will remove that folder and all of its contents, as well.

```bash
rm folder/
rm -r folder/
rm -rf a/
```

## Rename a folder

Rename `src` folder to `lib` folder

```bash
mv src/ lib
```

## Find folders

Find all folders under current dir:

```bash
find . -type d
```

The same as `ls -G`.

Find all folders under current dir which named "images":

```bash
find . -type d -naame "images"
```