# Getopts

```bash
## ':a': if the opt is a
## 'b:' if the opt is b and it has value as well
## '$OPTARG': is the value that passed in
## '\?': catch unknown opt
while getopts ':ab:' opt; do
    case "$opt" in
        a) echo "a found";;
        b) echo "b found and the value is $OPTARG";;
        \?) echo "unknow option";;
    esac
done
```

If we run it with:

```bash
./getopts.sh -a -b 123
## a found
## b found and the value is 123
```

If we run with some extra options we didn't handle:

```bash
bash % ./getopts.sh -a -b 123 -d -e -f 321
## a found
## b found and the value is 123
## unknow option
## unknow option
## unknow option
```

## Shift

Remove the args we have processed.

```bash
## ':a': if the opt is a
## 'b:' if the opt is b and it has value as well
## '$OPTARG': is the value that passed in
## '\?': catch unknown opt
while getopts ':ab:' opt; do
    case "$opt" in
        a) echo "a found";;
        b) echo "b found and the value is $OPTARG";;
        \?) echo "unknow option";;
    esac
done

shift $(( OPTIND -1 ))

for arg in $@; do
    echo "received arg $arg"
done 
```

If run it with:

```bash
./getopts.sh -a -b 123 abc def tsf 

## a found
## b found and the value is 123
## received arg abc
## received arg def
## received arg tsf
```