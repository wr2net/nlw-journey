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
  "destination": "Curitiba",
  "starts_at": "2024-07-11 23:00:00",
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
