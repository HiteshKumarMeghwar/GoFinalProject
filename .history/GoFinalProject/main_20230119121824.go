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
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	routes.Setup(app)

	app.Listen(":8080")
}
