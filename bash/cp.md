# Copy

## Case 0:

It acts like a loop

```bash
echo pre-{a,b,c}-post
## pre-a-post pre-b-post pre-c-post
echo pre-{,b,c}-post
## pre--post pre-b-post pre-c-post
echo {1..10}
## 1 2 3 4 5 6 7 8 9 10
echo {a..z}
## a b c d e f g h i j k l m n o p q r s t u v w x y z
```

## Case 1:

copy `index.js` and create a backup file called `index.js.backup`

```bash
cp index.js{,.backup}
```

## Case 2:

Create multi nested folder with same structure

```bash
mkdir -p packages/{pkg1,pkg2,pkg3}/src
tree
```

## Case 3:

Greate multi test files

```bash
touch test-{1..3}.js
```