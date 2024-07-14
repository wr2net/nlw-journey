```toml
name = 'Invite'
method = 'POST'
url = 'http://localhost:3333/trips/d71b42c5-8aa1-4bbd-bce5-03be28444a3b/invites'
sortWeight = 3000000
id = 'd01ab12a-17ac-49b4-96c1-9c69c302afe4'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "email": "xpto@gmail.com"
}'''
```
