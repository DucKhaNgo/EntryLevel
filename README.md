# EntryLevel
Kha Ngo Duc's Assignment for Entry Level

This is a NextJS and NodeJS Express application.
## Getting Started

First, I already deployed my app to AWS using EC2, Load Balancer and Cloudfront.

You can access to my project via this link:
### Front-End: https://d9qzddemjpiqd.cloudfront.net
### Back-End: https://d1pjsvwmoem0gh.cloudfront.net


## Installation

First, you need to install docker on your device. Can refer this link: https://docs.docker.com/desktop/install/mac-install/
Then you have to install npm, NodeJS.


1. Clone the repo
   ```sh
   git clone https://github.com/DucKhaNgo/EntryLevel.git
   ```
2. Then 
   ```
   cd EntryLevel-FE
   docker-compose up -d
   ```
3. Then
   ```
   cd ../EntryLevel-BE
   docker-compose up -d
   ```
4. Now you can access to the UI via: [http://localhost:3000](http://localhost:3000), the API via: [http://localhost:3001](http://localhost:3001)

### *Notice that if you're unable to start UI and API in local. You can access my cloudfront url above to give it a try

## Acknowledgments

I use seperate my API into 3 layers - Route, Controller and Service so that I can clearly divide the logic for each layer.
It also help me to keep my code clean because I dont have to put all of my logic code into one place, I can easily scale up my code into multiple services and apis.
I also use docker to dockerize my service so that other people can easily run my application without installing too many things.

When deploy to AWS, I use EC2 with target group and Load balancers for my application so that it can handle a huge of request becasue it can split the request to different EC2 instance
I used cloudfront for my UI so that I can cached the image, content so that the UI page will be able to load faster.
If I need a beautiful domain name, I just need to buy it in some domain service and config it route to route 53 then I will have a publish website for people.

In UI, I used NextJS with Material UI library to build the page because it's easy to build and I can deploy it in EC2 as the same way with my Apis.

Because this is a simple page load so I dont have to much to talk here. Hope you guys will like it. Thank you very much for giving me this opportunity!
## Contact

Kha Ngo - ngoduckha@gmail.com
