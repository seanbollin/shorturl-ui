ssh -i ~/seanbo.pem ubuntu@ec2-54-165-63-62.compute-1.amazonaws.com "cd shorturl-ui && git pull && /usr/local/bin/forever start index.js"
