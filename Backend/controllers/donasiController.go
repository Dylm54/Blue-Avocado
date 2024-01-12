package controllers

import (
	"donasila-repo/back-end/initializers"
	"donasila-repo/back-end/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateDonasi(c *gin.Context) {
	// mengambil donaturId dari parameter URL
	donaturIdStr := c.Param("donaturId")
	donaturId, err := strconv.Atoi(donaturIdStr)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid donaturId"})
		return
	}

	// Bind request body ke Donasi struct
	var donasi models.Donasi
	c.BindJSON(&donasi)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// men-set donaturId sesuai dari parameter URL
	donasi.DonaturId = donaturId

	// mengambil data donatur berdasarkan donaturId dari parameter URL
	var donatur models.Donatur
	result := initializers.DB.First(&donatur, donaturId)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": result.Error})
		return
	}

	// menambah totalDonasi dari donatur dengan nominal donasi sekarang
	donatur.TotalDonasi += donasi.Nominal

	// menyimpan data donatur
	result = initializers.DB.Save(&donatur)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": result.Error})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": donasi})
}
