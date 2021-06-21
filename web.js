# port (as described above) and host are both wrong
const host = 'localhost';
const port = 3000;

# use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
  console.log("Server started.......");
});
