package main

import (
	"fmt"
	"golang-react-todo/router"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("starting the server on port 9000...")

	log.Fatal(http.ListenAndServe(":9000", r))
}
