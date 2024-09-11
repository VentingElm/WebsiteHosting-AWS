The website is a weather forecast website created using HTML, CSS, and JavaScript in addition to having a animated favicon icon. It is hosted on a AWS S3 bucket which calls the API, "WeatherAPI" that was created on the AWS API Gateway. This gateway is connected to a Lambda function(code in node.js) which is trigerred by the S3 bucket. 
This is how the S3 bucket, API Gateway, and the Lambda function are linked on AWS:
![image](https://github.com/VentingElm/WebsiteHosting-AWS/assets/105898424/f95de85f-1d1d-414e-8cd5-86c40a6ed5c4)



The Website link: http://aws-weatherforecast2.s3-website-us-east-1.amazonaws.com/
Example of a search on the website:
Weather forecast of Tampa:
![image](https://github.com/VentingElm/WebsiteHosting-AWS/assets/105898424/94a803d0-5580-487d-b28e-208849a41d02)


New note: source.unsplash does not work currently so background images are now taken from "PicSum photos", an open-source alternative to source.unsplash
