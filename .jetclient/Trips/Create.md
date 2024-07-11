```toml
name = 'Create'
method = 'POST'
url = 'http://localhost:3333/trips'
sortWeight = 1000000
id = 'c9a4ece7-02f8-4712-bbef-2628d0063585'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "destination": "Florianópolis",
  "starts_at": "2024-07-10 23:00:00",
  "ends_at": "2024-07-27 00:00:00",
}'''
```
