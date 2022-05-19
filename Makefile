all:
	@echo "No Target Selected!"
	@echo "  build - first time build of project"
	@echo "  dev - start in dev mode"

build:
	bundle install

dev:
	bundle exec jekyll serve