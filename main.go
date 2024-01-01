package main

// Kütüpaneleri çağıralım.

import (
	"fmt"
	// "os"
	"log"
	"net/http"

	"todo-2/database"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/joho/godotenv"
)

/* Ön tanımlı değişkenler. */
var listenAt string = "0.0.0.0:8080" // Tüm arayüzlerde 8080 portunda dinle.

func main() {
	genv := godotenv.Load()
	if genv != nil {
		log.Fatal("\".env\" couldn't get in your current work directory.")
	}

	// dbf := os.Getenv("DATABASE")

	fmt.Println(database.CreateTables())
	server := echo.New()

	server.Use(middleware.Logger()) // Log tutucu zımbırtıyı devreye sok.
	server.Use(middleware.Recover()) // Bunu bilmiyom bakacaz görecez.

	server.GET("/", func(ctx echo.Context) error {
		return(ctx.String(http.StatusOK, "Merhaba Dünya!\n"))
	}) /* Burada bir get requesti aldık, bu request kök'e erişim olmak istenirse o zaman
		bir sabit döndüreceğiz */

	server.Logger.Fatal(server.Start(listenAt))
}
