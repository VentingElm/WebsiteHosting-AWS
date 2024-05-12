The website is a weather forecast website created using HTML, CSS, and JavaScript in addition to having a animated favicon icon. It is hosted on a AWS S3 bucket which calls the API, "WeatherAPI" that was created on the AWS API Gateway. This gateway is connected to a Lambda function(code in node.js) which is trigerred by the S3 bucket. 
This is how the S3 bucket, API Gateway, and the Lambda function are linked on AWS:
![image](https://github.com/VentingElm/AWS-WebsiteHosting/assets/105898424/4c4ba03e-fb10-497f-900a-41415f939674)



The Website link: http://aws-weatherforecast2.s3-website-us-east-1.amazonaws.com/
Example of a search on the website:
Weather forecast of Tampa
![image](https://github.com/VentingElm/AWS-WebsiteHosting/assets/105898424/fb803d4a-840a-42e3-bccd-1e0dc885ab14)


