import urllib.request
import requests
from pprint import pprint 

rrr = urllib.parse.quote("")
url = "http://openapi.foodsafetykorea.go.kr/api/daf4c9d14e2c429fa76b/COOKRCP01/json/1/2"
# request = urllib.request.Request(url)
# response = urllib.request.urlopen(request)
# rescode = response.getcode()
res = requests.get(url)
code = res.json()
select = code["COOKRCP01"]["row"][1]["RCP_PARTS_DTLS"]

# print(rescode)
pprint(select)
