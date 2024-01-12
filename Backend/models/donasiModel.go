package models

import "gorm.io/gorm"

type Donasi struct {
	gorm.Model
	DonaturId int
	Nominal   int
}
