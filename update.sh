cd ..
cd ndn-cxx
git pull
./waf configure
./waf
./waf install
cd ..
cd nfd
git pull
./waf configure
./waf
./waf install
cd ..
cd psync
./waf configure
./waf
./waf install
cd ..
cd nlsr
./waf configure
./waf
./waf install
cd ..