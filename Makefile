
MAKE 	?= make
PIP		?= pip3

MKDIR    := mkdocs

####################################################################
help:
	@echo "======================================================="
	@echo "           Choeur d'ailleurs"
	@echo "This Makefile is intended to generate the web site"
	@echo "======================================================="
	@echo "Available targets are:"
	@echo "  install  : install the required components"
	@echo "  build    : build the web site"
	@echo "  serve    : launch the mkdoc server"

test: 
	@echo test

####################################################################
build:
	cd $(MKDIR) && mkdocs build
#	git checkout docs/CNAME

serve:
	cd $(MKDIR) && mkdocs serve
#	git checkout docs/CNAME
	

####################################################################
install:
	$(PIP) install mkdocs[i18n]
	$(PIP) install mkdocs-encryptcontent-plugin
	$(PIP) install mkdocs-material

upgrade:
	$(PIP) install mkdocs --upgrade
	$(PIP) install mkdocs-encryptcontent-plugin --upgrade
	$(PIP) install mkdocs-material --upgrade

uninstall:
	$(PIP) uninstall -y mkdocs
	$(PIP) uninstall mkdocs-encryptcontent-plugin
	$(PIP) uninstall mkdocs-material
