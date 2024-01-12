package main

import (
	"donasila-repo/back-end/controllers"
	"donasila-repo/back-end/initializers"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
}

func main() {

	r := gin.Default()

	r.POST("/donasi/:donaturId", controllers.CreateDonasi)

	r.GET("/donatur/:donaturId", controllers.GetDonaturById)
	r.POST("/login/donatur", controllers.LoginDonatur)

	// Run the server
	r.Run()
}
