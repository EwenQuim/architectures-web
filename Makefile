default: 
	@echo "Please run make run-0, make run-1 or enter in the directory and run make to run the server"

run-0:
	cd 0-static && make

run-1:
	cd 1-ssr && make

run-2:
	cd 2-csr && make

run-3:
	cd 3-universal && make

run-4:
	cd 4-ssg && make

run-5:
	cd 5-resumable-hydration && make
