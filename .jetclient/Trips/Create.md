```toml
name = 'Create'
method = 'POST'
url = 'http://localhost:3333/trips'
sortWeight = 5000000
id = 'f2245e62-d9cf-454f-83e4-1a8a6e639cd5'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "destination": "São José",
  "starts_at": "2024-07-14 23:00:00",
  "ends_at": "2024-07-31 00:00:00",
  "owner_name": "Wagner Rigoli da Rosa",
  "owner_email": "wagnerr2@gmail.com",
  "emails_to_invite": [
    "wagner@rigolidarosa.com",
    "gessica@rigolidarosa.com",
    "livia@rigolidarosa.com",
    "liam@rigolidarosa.com",
  ]
}'''
```
