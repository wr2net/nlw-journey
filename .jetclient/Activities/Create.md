```toml
name = 'Create'
method = 'POST'
url = 'http://localhost:3333/trips/5c32325f-d430-4761-a1fb-60e2c7d6025f/activities'
sortWeight = 1000000
id = 'eeb5f80d-85b5-4ebe-89a9-e8b58bc82051'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "title": "Lunch",
  "occurs_at": "2024-07-15 12:00:00"
}'''
```
