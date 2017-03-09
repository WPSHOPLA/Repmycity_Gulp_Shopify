#1. Clone, Change and Push

- git clone
git clone https://github.com/JulianJorgensen/repmycity.git

- make new branch
	( "webdev" is new branch name)
	git checkout -b webdev
	*Repeat follow steps after you changed the file*

- After change, apply change
	git add .
	git commit -a -m "commit message"

- Push commit
	git push --set-upstream origin webdev

#2. Setup windows Development Environment

##2.1 Some programs and developments kits should be installed before:

 - Microsoft Visual studio 2013 and Win7 SDK
 - Ruby 2 and Devkit
 - python 2
 - node (& npm)

##2.2 System Requirements: Windows 7 Service Pack 1
  If you not using this, please open the "Windows update" and Upgrade to Service Pack 1.
  This is essential for installing Microsoft Visual Studio 2013

##2.3 Install Method

 - Microsoft Visual Studio 2013
	After upgrade your system to Windows 7 Service Pack 1, please install "Microsoft Visual Studio 2013 ultimate"
 - Ruby and Devkit
	After installing Ruby, install the devkit. Here, you should extract them to the "Installed Ruby Directory"
	cd C:\"Ruby directory"
	ruby dk.rb init
	edit:config.yml as ""as
	"
		---
		- C:/Ruby200-64
	"
	ruby dk.rb review
	ruby dk.rb install
	
 - Python
	Install python-2.7.amd64.msi and.
	Go to setup directory and make clone of python.exe as python2.exe
 - node and npm
	You should restart after install the lastest version of Node

##2.4 Current Version:

 - Microsoft Visual studio 2013, Wind7 SDK
 - Ruby 2.0.0p648 (2015-12-16) [x64-mingw32]
 - Python 2.7
 - Node 6.3.1 and NPM 3.10.3



#3. Environment Configuration

-  Clone git project

	git clone https://github.com/JulianJorgensen/repmycity.git
	git checkout -b webdev

- Install bundler, bower, gulp
	If you didn't install bundler, bower, gulp, then please install them as follows.
	To install bower is optional.

	gem install bundler
	npm install -g bower
	cd repmycity
	
	[ bower install ]

	npm install -g --save-dev gulp
	npm install -g --save-dev gulp-bower
	npm install --global gulp-cli

- Install bundle and npm
	
	bundle install
	npm install
	npm start

#4. Install Issues

There might be issues while installing.
The main issues are phantomjs and node-sass.

- phantomjs
	error: Find not on path
	This is your network problem, so you should  download them manually.
	For phantomjs, you should download the phantomjs from "https://github.com/Medium/phantomjs" and	save them in C:/Users/Adminstarator/App Data/Local/temp/phantomjs

- node header.tar.gz
	download from https://nodejs.org/download/release/v6.3.1 (node install version)
	Save them in C:/Users/Adminstrator/.node-gyp/

- node-sass
	while installing node-sass, it can ask you to install the python2 and VCBuilder.exe.
	In python install directory, check there are file with name "python2".
	If not, clone python.exe as python2.exe.
	If you install the Microsoft Visual Studio 2013, then VCBuilder problem has solved.