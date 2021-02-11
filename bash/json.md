# jq

## Install

```bash
brew install jq
```

## Usage

```bash
echo '{"foo": 123}' | jq '.foo' ## access foo's value, print 123
echo '{"a": {"b": 123}}' | jq '.a.b' ## 123
```

## Example

```bash
curl -s https://api.github.com/repos/facebook/react | jq '.stargazers_count'
```

## Array

```bash
echo '[1,2,3]' | jq '.[]'
## 1
## 2
## 3
```

```bash
echo '[{"id": 1}, {"id": 2}]' | jq '.[].id'
## 1
## 2
```

### Example

```bash
curl -s https://api.github.com/search/repositories?q=service+worker | jq '.items[].name'
```

## Parsing a file

Get 'dependencies' from package.json

```bash
jq '.dependencies' package.json

## {"express": "^4.16.4", "lodash": "^4.17.11"}
```

Only get keys for dependencies:

```bash
jq '.dependencies | keys | .[]' package.json

## "express"
## "lodash"
```

Then drop the `"``

```bash
jq -r '.dependencies | keys | .[]' package.json

## express
## lodash
```

Creat `check-unused-deps.sh`:

```bash
for dep in $(jq -r '.dependencies | keys | .[]' package.json); do
    if ! grep "require\(.*$dep.*\)" -Rq --exclude-dir="node_modules" .; then
        echo "You can probably remove $dep"
    fi
done
```

Give premission:

```bash
chmod +x check-unused-deps.sh
```

After running, it shows which deps can be removed.