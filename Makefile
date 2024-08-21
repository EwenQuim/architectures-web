default: 
	@echo "Please run make run-0, make run-1 or enter in the directory and run make to run the server"

run-0:
	cd 0-static && npx serve

run-1:
	cd 1-ssr && npm start

run-2:
	cd 2-ssg && npm start

run-3:
	cd 3-universal && npm start
