package models

import "gorm.io/gorm"

type Donatur struct {
	gorm.Model
	Username    string
	Password    string
	TotalDonasi int
}
