# $PATH

PATH is a global environment variable that represents a list of directories bash looks in for executable files. The executable files for bash commands like grep are all somewhere on your OS’s PATH. We can add our own folders to PATH to make our executables available as a command to bash. In this lesson we’ll learn how to add a new folder to our PATH in .bash_profile and how to symlink an executable file into /usr/local/bin, which is in PATH by default.

Note that in zsh, when modifying your PATH you to provide an absolute path, ~ is not expanded.

You can see the `PATH`:

```bash
echo $PATH
```

You can see one executable command where it located:

```bash
which ng
```

Add your executable command to the $PATH:

```bash
export PATH="$PATH:~/my-scripts"
```

Make the script:

```bash
mkdir -p my-scripts
echo 'echo hello' > my-scripts/hello
chmod +x my-scripts/hello
source .bash_profile
```

Then run `hello`, you shoul see the output.

## Other way

Another way to add an executable to $PATH is by symlinking an executable file into an existing folder that is always in $PATH.

```bash
echo 'echo hello2' > my-scripts/hello2
ln -s ~/hello2 /usr/local/bin
```