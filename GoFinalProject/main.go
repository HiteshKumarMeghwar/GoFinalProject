package main

import (
	"fmt"
	"net/http"
	"path/filepath"

	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/controllers"
	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/database"
	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/views"

	"github.com/go-chi/chi/v5"
)

func main() {
	database.LoadEnvVariables()
	/* Requiring Database */
	db := database.Connect()
	defer db.Close()

	route := chi.NewRouter()

	route.Get("/", controllers.Auth(views.Must(views.Parse(filepath.Join("templates", "dashboard.gohtml")))))

	route.NotFound(func(w http.ResponseWriter, r *http.Request) {
		http.Error(w, "Page Not Found...!", http.StatusNotFound)
	})

	fmt.Println("Stating the server on :8080 port ... !")
	http.ListenAndServe(":8080", route)
}
