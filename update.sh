cd ..
cd ndn-cxx
git pull
./waf configure
./waf
sudo ./waf install
cd ..
cd nfd
git pull
./waf configure
./waf
sudo ./waf install
cd ..
cd psync
./waf configure
./waf
sudo ./waf install
cd ..
cd nlsr
./waf configure
./waf
sudo ./waf install
cd ..