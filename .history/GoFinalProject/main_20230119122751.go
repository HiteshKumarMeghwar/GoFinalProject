package main

import (
	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/database"
	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/routes"
	"github.com/gin-gonic/contrib/cors"
	"github.com/gofiber/fiber/v2"
)

func main() {

	/* Requiring Database Env Variables */
	database.LoadEnvVariables()
	database.Connect()
	app := fiber.New()
	// this is really important ....
	/* app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	})) */

	app.Use(cors.New(cors.Config{
		AllowHeaders:     "Origin,Content-Type,Accept,Content-Length,Accept-Language,Accept-Encoding,Connection,Access-Control-Allow-Origin",
		AllowOrigins:     "*",
		AllowCredentials: true,
		AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	}))

	routes.Setup(app)

	app.Listen(":8080")
}
