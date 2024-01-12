package main

import (
	"donasila-repo/back-end/controllers"
	"donasila-repo/back-end/initializers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
}

func main() {

	r := gin.Default()
	config := cors.DefaultConfig()
    config.AllowAllOrigins = true
    config.AllowCredentials = true
    config.AddAllowHeaders("Authorization")

    r.Use(cors.New(config))

	r.POST("/donasi/:donaturId", controllers.CreateDonasi)

	r.GET("/donatur/:donaturId", controllers.GetDonaturById)
	r.POST("/login/donatur", controllers.LoginDonatur)

	// Run the server
	r.Run()
}
