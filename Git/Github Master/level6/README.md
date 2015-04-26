###Integrating your Repo

You would use a **service** to integrate your repository with a 3rd party application, and a **webhook* to integrate your repository with a custom application.

###API Authorization

Which of the following API calls would require a personal access token?

* get basic user information
* **create a repository**
* get a list of user's repositories

###Get User Info 
Complete the command below to get information about the codeschool-kiddo user.

	curl -i https://api.github.com/users/codeschool-kiddo

HTTP/1.1 200 OK
Server: GitHub.com
Date: Wed, 13 Aug 2014 20:10:52 GMT
Content-Type: application/json; charset=utf-8
Status: 200 OK
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 57
X-RateLimit-Reset: 1407962757
Cache-Control: public, max-age=60, s-maxage=60
Last-Modified: Wed, 13 Aug 2014 13:27:23 GMT
ETag: "0c035fb7fad7cb81538dbb3ee539ece0"
Vary: Accept
X-GitHub-Media-Type: github.v3
X-XSS-Protection: 1; mode=block
X-Frame-Options: deny
Content-Security-Policy: default-src 'none'
Content-Length: 1403
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Allow-Origin: *
X-GitHub-Request-Id: 42C222FA:0873:8971655:53EBC64C
Strict-Transport-Security: max-age=31536000; includeSubdomains
X-Content-Type-Options: nosniff
Vary: Accept-Encoding
X-Served-By: d818ddef80f4c7d10683dd483558952a

{
  "login": "codeschool-kiddo"
  "id": 7882662,
  "avatar_url": "https://avatars.githubusercontent.com/u/7882662?v=2",
  "gravatar_id": "7a01a8c1cae668218bd0f3d4404bee47",
  "url": "https://api.github.com/users/codeschool-kiddo",
  "html_url": "https://github.com/codeschool-kiddo",
  "followers_url": "https://api.github.com/users/codeschool-kiddo/followers",
  "following_url": "https://api.github.com/users/codeschool-kiddo/following{/other_user}",
  "gists_url": "https://api.github.com/users/codeschool-kiddo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/codeschool-kiddo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/codeschool-kiddo/subscriptions",
  "organizations_url": "https://api.github.com/users/codeschool-kiddo/orgs",
  "repos_url": "https://api.github.com/users/codeschool-kiddo/repos",
  "events_url": "https://api.github.com/users/codeschool-kiddo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/codeschool-kiddo/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Code School Kiddo",
  "company": "Code School",
  "blog": "https://www.codeschool.com",
  "location": "Orlando",
  "email": "",
  "hireable": false,
  "bio": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2014-06-13T17:41:15Z",
  "updated_at": "2014-08-13T13:27:23Z"
}