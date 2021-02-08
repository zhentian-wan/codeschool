# Shell Script

## Create a script

See [Chmod.md](./Chmod.md), how to create a `sh` file and modify premisson to exec mode.

## Parameters

Paramters are referred by `$1, $2....`

For example:

```sh
echo "Hello $1"
```

Run:

```bash
./script.sh Wan
```

It print `Hello Wan`.

## Example

Create a empty project

init-js.sh

```sh
echo "Initializing JS project at $(pwd)"
git init
npm init -y # create package.json with all the defaults
mkdir src
touch src/index.js
code . # open src/index.js
```

Modify the chmod:

```bash
chmod u+x init-js.sh
```

Make a global accessable:

```bash
cp init-js.sh /usr/local/bin/init-js.sh
```

Now if you run `init-js` in other folder, it will create an empty js project for you and open the VSCode.


## Function

```bash
greet() {
  return "$1 world"
}

greet "Hello" ## call greet function with "Hello" paramter

greeting = $(greet "Hello") ## Save the output of function calling into a variable
```


## global and local variables

```bash
global = 123

test() {
  echo "global = $global"
  local local_var = "i am a local"
  echo "local_var = $local_var"
}

test

echo "global = $global"
echo "local_var = $local_var" ## you will not see this output correctly
```

## Conditional Statements

Basic conditional block:

```bash
if [[  ]]; then

fi
```

Exp: 

```bash
if [[ $USER = 'username' ]]; then
  echo "true"
else
  echo "false"
fi
```

*not equal*: `!=`
*numeric equality*: `-eq`
*not equals*: `-ne`
*is empty*: `-z`

```bash
if [[ 1 -eq 1 ]];

if [[ -z $USER ]];
```

## Elif

```bash
if [[ -z $USER ]]; then
  echo "user is empty"
elif [[ 1 -eq 1 ]]; then
  echo "1==1"
else
  echo "false"
fi
```
## Ternary

```bash
[[ $USER = 'username' ]] && echo "yes" || echo "no"
```

Exp:

```bash
check_status() {
  ## Get HTTP status code
  local status=$(curl -ILs $1 | head -n 1 | cut -d ' ' -f 2)
  if [[ $status -lt 200 ]] || [[ $status -gt 299 ]]; then
    echo "$1 failed with a $status"
    return 1
  else 
    echo "$1 succeeded with a $status"
  fi
}

check_status https://example.com
check_status https://example.com/404
```