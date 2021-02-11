#jq

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