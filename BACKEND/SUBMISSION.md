## Repository: 

```
https://github.com/FarinaSalman/Fall-2021-Interview.git
```

## Run Instructions

Before running, ensure you have NodeJS downloaded. If you're not already in the ```BACKEND``` folder, follow the command:

```
cd BACKEND
```

This application connects to mongoDB

To the run the application, run the command:

```
npm run dev
```

Then, go to ```http://localhost:5000``` to ensure the application is running.
You should see ```Cannot GET /``` on the webpage and ```MongoDB Connected...``` if the application is running properly.

POST requests are sent to:
1. ```http://localhost:5000/api/url/encode``` to encode
2. ```http://localhost:5000/api/url/decode``` to decode

In the ```requests``` folder, you can find ```decode.http``` and ```encode.http```. If you have VS Code downloaded, you can install from the marketplace the extension ```REST Client``` to send requests from there.

Sending the request in ```encode.http``` will return the response:
```
{
  "_id": "60ac3d982a4b4a0fbac7411e",
  "longUrl": "https://github.com/FarinaSalman/Fall-2021-Interview",
  "shortUrl": "http://localhost:5000/RvfwHzCFk",
  "urlCode": "RvfwHzCFk",
  "date": "Mon May 24 2021 19:58:16 GMT-0400 (Eastern Daylight Time)",
  "__v": 0
}
```

Similarly, sending the request in ```decode.http``` will return the same response

Currently, it is not passing the tests, however you can still run it using the command:

```npm run test```

## Additional Information

The current state of the database can be seen below:
![databaseState](/assets/databaseState.png)

While the application is running, any of these three short urls will redirect you to the correct url:
<ul>
    <li>http://localhost:5000/RvfwHzCFk</li>
    <li>http://localhost:5000/i--K9LtVr</li>
    <li>http://localhost:5000/jVwp6cHlg</li>
</ul>