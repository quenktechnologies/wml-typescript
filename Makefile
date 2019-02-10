lib: $(shell find src -type f -name \*.ts) src/parse/parser.js
	rm -R lib/**/*.ts 2> /dev/null || true 
	mkdir -p lib
	cp -R -u src/* lib
	./node_modules/.bin/tsc --project lib

src/parse/parser.js: src/parse/wml.y
	./node_modules/.bin/jison -o $@ src/parser/wml.y 
