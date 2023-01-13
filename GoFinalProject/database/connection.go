package database

import (
	"fmt"
	"os"

	"github.com/HiteshKumarMeghwar/GoFinalProjec/MyModule/models"

	// _ "github.com/jackc/pgx/v5/stdlib"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type PostgresConfig struct {
	Host     string
	Port     string
	User     string
	Password string
	Database string
	SSLMode  string
}

func (cfg PostgresConfig) String() string {
	return fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s", cfg.Host, cfg.Port, cfg.User, cfg.Password, cfg.Database, cfg.SSLMode)
}

var DB *gorm.DB

func Connect() {
	cfg := PostgresConfig{
		Host:     os.Getenv("HOST"),
		Port:     os.Getenv("PORT"),
		User:     os.Getenv("USER"),
		Password: os.Getenv("PASSWORD"),
		Database: os.Getenv("DATABASE"),
		SSLMode:  os.Getenv("SSMODE"),
	}

	// db, err := sql.Open("pgx", cfg.String())
	connection, err := gorm.Open(postgres.Open(cfg.String()), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	DB = connection
	connection.AutoMigrate(&models.User{})
	return
}
