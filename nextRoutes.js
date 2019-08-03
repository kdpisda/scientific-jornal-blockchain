import routes from "next-routes";

routes.add("/", "index");
routes.add("/dashboard", "dashboard");
routes.add("/register", "register");
routes.add("/login", "login");
routes.add("/profile", "profile");
routes.add("/add", "add");
routes.add("/resourcecs", "resources");

module.exports = routes;
