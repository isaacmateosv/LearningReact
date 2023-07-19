import requests

url = "https://cloud.tenable.com/was/v2/vulns/details"
headers = {"Authorization": "Bearer 6dd89915dad293693cce7aee3954b63428d46bb20ae4987d62796e0414c38643"}
params = {"scan_id": "1234567890"}

response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    data = response.json()
else:
    print(f"Error: {response.status_code}")
