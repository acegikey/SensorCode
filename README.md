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
   "uuid": "352903053655881"
 }
]
```

####PUT
http://sensecode.herokuapp.com/api/device/1

Request
```
{
  "sensor": 1,
  "interlock": 1
}
```

Request
```
{
  "interlock": 2
}
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
  "sensor": 1,
  "interlock": 1
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
