# Shell Parameter Exapnsion

It is same when you doing:

```bash
echo $USER
## or
echo ${USER}
```

`${}` is called shell parameter expansion.

It is useful when you want to print as such:

```bash
echo $USER_$(date '+%Y')
```

Expected result was `JOHN_2021`. But it just print `John`.

That is because it doesn't know `$USER_`.

To fix the issue, we can do:

```bash
${USER}_($date '+%Y')
```

Then we get the correct result.

## Default value

```bash
echo ${str:-'default'}
```

It prints `default` because `$str` doesn't exist.

## Example

Count files under dir:

```bash
nano count-files.sh
```

count-files.sh:

```bash
dir=${1:-$PWD} ## default to current dir
find "$dir" -type f -maxdepth 1 | wc -l
```