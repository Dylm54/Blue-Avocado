package controllers

import (
	"donasila-repo/back-end/initializers"
	"donasila-repo/back-end/models"
	"donasila-repo/back-end/request"
	"net/http"

	"github.com/gin-gonic/gin"
)

func LoginDonatur(c *gin.Context) {
	var loginReq request.DonaturLoginReq

	err := c.BindJSON(&loginReq)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// mengambil data donatur dari username dan password
	var donatur models.Donatur
	err = initializers.DB.Where("username = ? AND password = ?", loginReq.Username, loginReq.Password).First(&donatur).Error
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect username or password"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Login successful", "data": donatur})
}
