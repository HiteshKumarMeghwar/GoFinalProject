package controllers

import (
	"fmt"
	"net/http"

	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/database"
)

func Users(tpl Template) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		/* Requiring Database */
		db := database.Connect()
		defer db.Close()

		if r.URL.Path == "/" {
			session, _ := store.Get(r, "session")
			id, ok := session.Values["userId"]
			fmt.Println("ok: ", ok)
			if !ok {
				http.Redirect(w, r, "/", http.StatusFound) // http.StatusFound is 302
				return
			}
			fmt.Println(id)
		}
		tpl.Execute(w, nil)
	}
}
