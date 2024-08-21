default: 
	@echo "Please run make run-0, make run-1 or enter in the directory and run make to run the server"

run-0:
	cd 0-static && npx serve

run-1:
	cd 1-ssr && make

run-2:
	cd 2-csr && make

run-3:
	cd 3-universal && make
