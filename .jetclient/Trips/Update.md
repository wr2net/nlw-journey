```toml
name = 'Update'
method = 'PUT'
url = 'http://localhost:3333/trips/d71b42c5-8aa1-4bbd-bce5-03be28444a3b'
sortWeight = 1000000
id = 'c9a4ece7-02f8-4712-bbef-2628d0063585'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "destination": "São José",
  "starts_at": "2024-07-14 23:00:00",
  "ends_at": "2024-07-31 00:00:00"
}'''
```
