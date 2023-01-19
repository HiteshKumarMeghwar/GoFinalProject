package main

import (
	"net/http"

	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/database"
	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/routes"
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

	app.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodDelete},
	}))
	routes.Setup(app)

	app.Listen(":8080")
}
