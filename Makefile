PREFIX := .
BINDIR := $(PREFIX)/bin
BIN := server

build:
	go get
	mkdir -p $(BINDIR) $(DBDIR)
	go build -o $(BINDIR)/$(BIN) main.go
	ln -fv $(BINDIR)/$(BIN) $(BIN)

exec:
	@$(BINDIR)/$(BIN)

clean:
	rm -f $(BINDIR)/$(BIN) $(BIN)

.PHONY: build
