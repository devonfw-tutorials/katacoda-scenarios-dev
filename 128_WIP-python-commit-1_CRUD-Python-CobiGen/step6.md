

Run the application on your local host:

`flask run`

We can test our application using Postman. Paste the main path on a new Postman tab, for instance:

http://127.0.0.1:5000/user

Our table is empty for the moment, so we will select the POST method to add new data. We can submit JSON requests by clicking on the &#34;Body&#34; tab and selecting &#34;raw&#34;. For example, submit:

--
{
    &#34;name&#34;:&#34;elena&#34;,
    &#34;age&#34;:26,
    &#34;phone&#34;:&#34;555123&#34;,
    &#34;email&#34;: &#34;elena@devon.com&#34;
}
--
Our new user should now be accessible from the database under &#34;id&#34; number 1. Check this by submiting a GET request to the following path:

http://127.0.0.1:5000/user/1

We will now edit our entry by sending a PUT request. Submit the following body to http://127.0.0.1:5000/user/1:

--
{ &#34;phone&#34;:&#34;777123&#34; }
--
Now send another GET request and check whether the column was properly updated.

Lastly, you can check the DELETE method by sending this request to http://127.0.0.1:5000/user/1. Then send a GET request to http://127.0.0.1:5000/user. The application returns &#34;User list is empty&#34;.




