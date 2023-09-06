const http = require("http");
const Student = [
    {
      "what is nodejs":
        "is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
      Module: "HTTP Module",
    },
    {
      Benifits1: "High Performance",
      Benifits2: "Scalable",
      Benifits3: "Easy to Learn ",
      Benifits4: "Many More",
      Module: "HTTP Module",
    },
  ];

const App = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url == "/" && req.method == "GET") {
    res.statusCode = 201;
    res.write("<html>");
    res.write("<body>");
    res.write("<h1> Home Page </h1>");
    res.write("<h1> What is Nodejs </h1>");
    res.write(
      "<h3>is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. </h3>"
    );
    res.write("<h3>Benifits of nodejs</h3>");
    res.write("<li>High Performance</li>");
    res.write("<li>Scalable</li>");
    res.write("<li>Easy To Learn</li>");
    res.write("<li>Reduce loading time using catch</li>");
    res.write("<li>Cost-Effective</li>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1> About Page </h1>");
    res.write("<h1> What is Nodejs </h1>");
    res.write(
      "<h3> is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</h3>"
    );
    res.write("<h3>Benifits of nodejs</h3>");
    res.write("<li>High Performance</li>");
    res.write("<li>Scalable</li>");
    res.write("<li>Easy To Learn</li>");
    res.write("<li>Reduce loading time using catch</li>");
    res.write("<li>Cost-Effective</li>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url == "/fetchApi") {
    res.statusCode = 301;
    

    const info = JSON.stringify(Student);

    res.setHeader("content-type", "application/json;charset=UTF-8");
    res.write(info);
    res.end();
  } else {
    res.statusCode = 404;
    res.write("404 Page Not Found");
  }
});
App.listen(56, () => {
  console.log("Server is running on port 56....");
});
