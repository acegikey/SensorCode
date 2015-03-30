# SenseCode

###Using Sails Blueprint APIs
http://sailsjs.org/#!/documentation/reference/blueprint-api


###Device

####POST
http://sensecode.herokuapp.com/api/device

Request
```
{
  "os": "Android",
  "manufacturer": "Samsung",
  "model": "SHV-E210K",
  "uuid": "352903053655881"
}
```

####GET
```
http://sensecode.herokuapp.com/api/device/?where={"uuid":"352903053655881"}
```
```
[
 {
   "id": 1,
   "createdAt": "2013-10-18T01:22:56.000Z",
   "updatedAt": "2013-10-18T01:22:56.000Z",
   "os": "Android",
   "manufacturer": "Samsung",
   "model": "SHV-E210K",
   "uuid": "352903053655881",
   "notificationKey": "APA91bEc6mFJKb7plsdxGoFXFS5Mw46unBZ_Trb8D_tyFgq1xvhqOJFcm2oy_uQYYIVJvMw0_pASrUNFxCceEuAYtNrrbhFvaSihoUonWJAKhnBcSLi5CbVZ9NiCe-hO9718mZPMU8yV"
 }
]
```

####PUT
http://sensecode.herokuapp.com/api/device/update

Params
```
deviceId
notificationKey
```

Response
```
{
  "id": 1,
  "createdAt": "2013-10-18T01:22:56.000Z",
  "updatedAt": "2013-10-18T01:22:56.000Z",
  "os": "Android",
  "manufacturer": "Samsung",
  "model": "SHV-E210K",
  "uuid": "352903053655881",
  "notificationKey": "APA91bEc6mFJKb7plsdxGoFXFS5Mw46unBZ_Trb8D_tyFgq1xvhqOJFcm2oy_uQYYIVJvMw0_pASrUNFxCceEuAYtNrrbhFvaSihoUonWJAKhnBcSLi5CbVZ9NiCe-hO9718mZPMU8yV",
  "sensor": 1,
  "interlock": 1
}
```

####POST
http://sensecode.herokuapp.com/api/device/push

Request
```
{
  "to": 1,
  "from": 2,
  "title": "Just want to say hello",
  "message": "This is Tae Hwan Kim, 25 years old full-stack developer, kind and cool. Please contact me if you have any interests in me +82-10-7755-4400"
}
```

Response
```
200 SUCCESS
```

Push
```
{
  "title": "Just want to say hello",
  "message": "This is Tae Hwan Kim, 25 years old full-stack developer, kind and cool. Please contact me if you have any interests in me +82-10-7755-4400",
  "code": "{"device":2,"type":"phone","icon":"account","title":"samsung","message":"SHV-E210K","azimuth":-111.617,"pitch":-0.727216,"roll":0.327586,"latitude":0,"longitude":0,"id":2,"createdAt":"2015-03-30T15:39:37.000Z","updatedAt":"2015-03-30T15:39:37.000Z"}"
}
```

###Code

####POST
http://sensecode.herokuapp.com/api/code

Request
```
{
  "device": 1,
  "type": "phone",
  "icon": "account",
  "title": "Tae Hwan Kim",
  "message": "Hello, this is Tae Hwan Kim. Nice to meet you :) Contact me via contact@thefinestartist.com or +82-10-7755-4400.",
  "azimuth": 0.0,
  "pitch": 0.0,
  "roll": 0.0,
  "latitude": 0.0,
  "longitude": 0.0
}
```
```
{
  "device": 1,
  "type": "poster",
  "icon": "video",
  "title": "Gril's Day - Darling",
  "message": "https://www.youtube.com/watch?v=aS_0aPCARpg",
  "azimuth": 0.0,
  "pitch": 0.0,
  "roll": 0.0,
  "latitude": 0.0,
  "longitude": 0.0
}
```

####GET
```
http://sensecode.herokuapp.com/api/code/?where={"device":1}
```
```
[
  {
    "id": 1,
    "createdAt": "2013-10-18T01:22:56.000Z",
    "updatedAt": "2013-10-18T01:22:56.000Z",
    "device": 1,
    "type": "phone",
    "icon": "account",
    "title": "Tae Hwan Kim",
    "message": "Hello, this is Tae Hwan Kim. Nice to meet you :) Contact me via contact@thefinestartist.com or +82-10-7755-4400.",
    "azimuth": 0.0,
    "pitch": 0.0,
    "roll": 0.0,
    "latitude": 0.0,
    "longitude": 0.0
  },
  {
    "id": 2,
    "createdAt": "2013-10-18T01:22:56.000Z",
    "updatedAt": "2013-10-18T01:22:56.000Z",
    "device": 1,
    "type": "poster",
    "icon": "video",
    "title": "Gril's Day - Darling",
    "message": "https://www.youtube.com/watch?v=aS_0aPCARpg",
    "azimuth": 0.0,
    "pitch": 0.0,
    "roll": 0.0,
    "latitude": 0.0,
    "longitude": 0.0
  }
]
```

####GET
```
http://sensecode.herokuapp.com/api/code/search?azimuth=0&pitch=0&roll=0&latitude=0&longitude=0
```
```
[
  {
    "id": 1,
    "createdAt": "2013-10-18T01:22:56.000Z",
    "updatedAt": "2013-10-18T01:22:56.000Z",
    "device": 1,
    "type": "phone",
    "icon": "account",
    "title": "Tae Hwan Kim",
    "message": "Hello, this is Tae Hwan Kim. Nice to meet you :) Contact me via contact@thefinestartist.com or +82-10-7755-4400.",
    "azimuth": 0.0,
    "pitch": 0.0,
    "roll": 0.0,
    "latitude": 0.0,
    "longitude": 0.0
  },
  {
    "id": 2,
    "createdAt": "2013-10-18T01:22:56.000Z",
    "updatedAt": "2013-10-18T01:22:56.000Z",
    "device": 1,
    "type": "poster",
    "icon": "video",
    "title": "Gril's Day - Darling",
    "message": "https://www.youtube.com/watch?v=aS_0aPCARpg",
    "azimuth": 0.0,
    "pitch": 0.0,
    "roll": 0.0,
    "latitude": 0.0,
    "longitude": 0.0
  }
]
```

###Sensor

####POST
http://sensecode.herokuapp.com/api/sensor

Request
```
{
  "device": 1,
  "azimuth": 0.0,
  "pitch": 0.0,
  "roll": 0.0,
  "latitude": 0.0,
  "longitude": 0.0
}
```

####GET
```
http://sensecode.herokuapp.com/api/sensor/1
```
```
{
  "id": 1,
  "createdAt": "2013-10-18T01:22:56.000Z",
  "updatedAt": "2013-10-18T01:22:56.000Z",
  "device": 1,
  "azimuth": 0.0,
  "pitch": 0.0,
  "roll": 0.0,
  "latitude": 0.0,
  "longitude": 0.0
}
```

####PUT
http://sensecode.herokuapp.com/api/sensor/1

Request
```
{
  "azimuth": 0.0,
  "pitch": 0.0,
  "roll": 0.0,
  "latitude": 0.0,
  "longitude": 0.0
}
```
