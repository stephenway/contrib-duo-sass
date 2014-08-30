BIN := node_modules/.bin
REPORTER ?= spec
SASS = $(wildcard test/fixtures/*/*.scss)
CSS = $(SASS:.scss=.css)

test: node_modules $(CSS)
	@$(BIN)/gnode $(BIN)/mocha \
	  --reporter $(REPORTER) \
	  --require co-mocha

node_modules: package.json
	@npm install
	@touch $@

%.css: %.scss
	@$(BIN)/node-sass $< $@

clean:
	rm -rf test/fixtures/*/{components,*.css}

.PHONY: test
