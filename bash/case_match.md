# Case

## Basic

```bash
case "$1" in
    a) echo "a match";;
    b) echo "b match";;
    c)
        echo "c match"
    ;;
    *) echo "none of the case match"
       exit 1;;
esac
```

If we run:

```bash
./case_match.sh b
## print "b match"
./case_match.sh anything
## print "none of the case match"
echo $?
## 1
```

## Example

```bash
case "$1" in
    *.tar|*.tgz) tar -xzvf "$1";;
    *.gz) gunzip -k "$1";;
    *.zip) unzip -v "$1";;
    *) echo "Cannot extract $1"
       exit 1
    ;; 
esac
### ./case_match.sh image.zip
```