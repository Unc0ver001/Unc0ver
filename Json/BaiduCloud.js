/*
Baidu netdisc unlocks online video play speed.
Key data from thor filter
Surge4.0:
http-response https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Unc0ver001/Unc0ver/main/Json/BaiduCloud.js

QX1.0.0:
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/Unc0ver001/Unc0ver/main/Json/BaiduCloud.js

MITM = pan.baidu.com
*/

let obj = JSON.parse($response.body);
obj = {
  "product_infos": [{
    "product_id": "5310897792128633390",
    "start_time": 1417260485,
    "end_time": 2222222222,
    "buy_time": "1417260485",
    "cluster": "offlinedl",
    "detail_cluster": "offlinedl",
    "product_name": "gz_telecom_exp"
  }, {
    "product_name": "svip2_nd",
    "product_description": "超级会员",
    "function_num": 0,
    "start_time": 1417260485,
    "buy_description": "",
    "buy_time": "1417260485",
    "product_id": "1",
    "auto_upgrade_to_svip": 0,
    "end_time": 2222222222,
    "cluster": "vip",
    "detail_cluster": "svip",
    "status": 0
  }],
  "currenttime": 1573473597,
  "reminder": {
    "reminderWithContent": [],
    "advertiseContent": []
  },
  "request_id": 7501873289383874371
};
$done({body: JSON.stringify(obj)});
