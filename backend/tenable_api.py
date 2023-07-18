import requests

url = "https://cloud.tenable.com/was/v2/vulns/details"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
params = {"scan_id": "1234567890"}

response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    data = response.json()
else:
    print(f"Error: {response.status_code}")
