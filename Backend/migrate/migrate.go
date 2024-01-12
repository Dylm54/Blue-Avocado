package main

import (
	"donasila-repo/back-end/initializers"
	"donasila-repo/back-end/models"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()

}

func main() {
	initializers.DB.AutoMigrate(&models.Donatur{})
	initializers.DB.AutoMigrate(&models.Donasi{})
}
