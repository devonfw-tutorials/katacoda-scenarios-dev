You should now see a new &#34;venv&#34; folder in your package explorer. To check whether the virtual environment activated properly make sure the terminal is printing &#34;(venv)&#34;, followed by your directory.

If any packages failed to install automatically, try to do so manually. 


Let&#39;s initialize the database now.






Run flask db init with this bash-command.
`flask db init `{{execute T1}} 








Run flask db migrate -m &#39;first migration&#39; with this bash-command.
`flask db migrate -m &#39;first migration&#39; `{{execute T1}} 








Run flask db upgrade with this bash-command.
`flask db upgrade `{{execute T1}} 



