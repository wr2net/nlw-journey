```toml
name = 'Create'
method = 'POST'
url = 'http://localhost:3333/trips/5c32325f-d430-4761-a1fb-60e2c7d6025f/links'
sortWeight = 1000000
id = '88b9dd07-1ef6-4b8d-b907-43daa9a39d89'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "title": "Wagner",
  "url": "http://wagner.fawacom.com.br"
}'''
```
