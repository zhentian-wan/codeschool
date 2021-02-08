# Chmod

```bash
## Create a file
vim script.sh
## output some content
echo "Hello World"
## Run the script
./script.sh
```

It ouput `permission denied: ./script.sh`.

If we log out:

```bash
ls -l
```

it prints `-rw-r--r--`.

To fix it:

```bash
chmod u+x script.sh
```

Now it becomes `-rwxr--r-- `

