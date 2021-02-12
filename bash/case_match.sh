case "$1" in
    a) echo "a match";;
    b) echo "b match";;
    c)
        echo "c match"
    ;;
    *) echo "none of the case match"
       exit 1
    ;;
esac