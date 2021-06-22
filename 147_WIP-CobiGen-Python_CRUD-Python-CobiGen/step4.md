


Now open the folder containing the .yml input on Visual Studio, for instance. Observe that Cobigen has generated and named the five files mentioned above. We are now set to run the application.

The safest way to install the required packages is to do so locally, by setting up a virtual environment. 
Open the integrated terminal. You might need to install the &#34;virtualenv&#34; package if you haven&#39;t already:

`python -m pip install virtualenv`

Create your virtual environment. Name it &#34;venv&#34;, for instance:
python -m virtualenv venv`

You should now see a new &#34;venv&#34; folder in your package explorer. On Windows, activate the virtual environment by running:

`.\venv\Scripts\activate`

To check whether the virtual environment activated properly make sure the terminal is printing &#34;(venv)&#34;, followed by your directory.

We can now install the required packages safely. Run:

`pip install -r requirements.txt`

If any packages failed to install automatically, try to do so manually. 



